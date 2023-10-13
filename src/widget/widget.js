/**
 * Javascript assets for standalone global menu widget.
 **/
import GlobalMenu from '../component/global-menu';

const getRemoteComponentMarkup = async () => {

  const remoteUrl = `${process.env.REMOTE_PROTOCOL}//${process.env.REMOTE_HOST}:${process.env.REMOTE_PORT}${process.env.REMOTE_BASEPATH}`;

  try {
    let response = await fetch(
      `${remoteUrl}/widgets/global-menu/global-menu.html`
    );

    if (!response.ok) {
      throw new Error('Non 200 request code received: ' + response.status);
    }

    return response.text();

  } catch (err) {
    console.log('Error retrieving NHSE menu component: ' + err);
  }
};

const createMenuElement = (html) => {
  let container = document.createElement('div');
  container.id = 'nhse-global-menu';
  container.classList.add('nhse-global-menu');
  container.innerHTML = html;
  return container;
};

document.addEventListener('DOMContentLoaded', () => {
  let menuContainer = document.getElementById('nhse-global-menu');

  if (menuContainer === null) {
    throw new Error('#nhse-global-menu container element does not exists, cannot initialise menu.')
  }

  let containerWidth = false;

  if (menuContainer.hasAttribute('data-container-width')) {
    containerWidth = menuContainer.getAttribute('data-container-width');
    if (isNaN(containerWidth)) {
      throw new Error('#nhse-global-menu data-container-width value must be an integer.')
    }
  }

  // Async call to retrieve component markup remotely.
  getRemoteComponentMarkup().then((html) => {
    if (html === null) {
      throw new Error('Could not retrieve remote component markup.');
    }

    // Replace menuContainer with remote component markup.
    const remoteMenu = createMenuElement(html);
    menuContainer.replaceWith(remoteMenu);

    // Apply custom container width if present.
    if (containerWidth !== false) {
      remoteMenu.querySelector('.nhse-global-menu__wrapper')
        .style.maxWidth = containerWidth + 'px';
    }

    // Initialise javascript behaviour.
    GlobalMenu();
  });
});
