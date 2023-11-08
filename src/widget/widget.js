/**
 * Javascript assets for standalone global menu widget.
 **/
import GlobalMenu from '../component/global-menu';

document.addEventListener('DOMContentLoaded', () => {
  let menuContainer = document.getElementById('nhse-global-menu');

  if (menuContainer === null) {
    throw new Error('#nhse-global-menu container element does not exists, cannot initialise menu.')
  }

  // Initialise javascript behaviour.
  GlobalMenu();
});
