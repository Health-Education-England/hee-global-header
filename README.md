# NHS encapsulated global header

This repo contains the codebase for the shared NHS global header component.

View an example of the component in action [here](https://health-education-england.github.io/hee-global-header/widgets/global-menu/example.html).

## Getting started

There are three different steps required to get the component displaying on your website.

_Please note that all the compiled assets listed below can be found in the `dist` directory of this codebase. You'll 
need to download these assets and include them onto your templates using the correct absolute or relative paths._

### 1. CSS assets

Include the `nhse-global-menu.min.css` in the `<head>` of your webpage:

```html
<head>
  ...
  <link href="nhse-global-menu.min.css" rel="stylesheet" />
  ...
</head>
```

### 2. Javascript assets

Include the `nhse-menu-widget.min.js` javascript file before the closing `<body>` of your template:

```html
<body>
  ...
  <script src="nhse-menu-widget.min.js"></script>
</body>
```

### 3. HTML markup

Include the default version of the header component markup on your template:

```html
<div data-container-width="small" data-theme="blue" class="nhse-global-menu" id="nhse-global-menu">
  <div class="nhse-global-menu__wrapper">
    <div class="nhsuk-width-container nhse-global-menu__container">
      <a aria-label="Visit NHS England website" class="nhse-global-menu__logo" href="https://england.nhs.uk" title="NHS England">
        <div class="nhse-global-menu__logo__img"></div>
        <span class="nhse-global-menu__logo__name">England</span>
      </a>
    </div>
  </div>
</div>
```

Please not the above HTML snippet is using the default options for the component. See below on how to customise the 
component to suite your website.

## Component options

There are two customisable options available when using this component, and they are configured using two different
`data` attributes within the parent `#nhse-global-menu` container:

### Container width: `data-container-width`

This option is used to align the header with your container / grid system.

It accepts the following values:

- `small`  (sets the header container max-width to `960px`)
- `medium` (sets the header container max-width to `1280px`)
- `large`  (sets the header container max-width to `1440px`)

### Theme: `data-theme`

This option is used to adjust the background colour, logo colour and text colour of the header, to better suit your
website design system.

It accepts the following values:

- `white`
- `blue`

## Further development / customisation

If you would like to further customise the component via your own custom code, below is a guide on how to do so:

#### Prerequisites 

- [NodeJS](https://nodejs.org/en)

#### Setup

In order to install / configure the codebase dependencies please run the following command:

`npm install`

#### Making changes 

In order to have your changes automatically compiled and refreshed in your local browser, run the following command:

`npm run watch`

If you wish to recompile the component assets without launching a browser, run the following command:

`npm run build`

If you just wish the view the compiled component in a local browser (without recompiling) run:

`npm run serve`

### Customising container width options

If you wish to customise the container width parameters, you'll be able to do so by modifying `src/component/_container-widths.scss`.

This file contains variables which you can adjust to cater for different container width.

### Customising general component styling

You can customise the component in any other way you see fit by modifying `src/component/_global-menu.scss`
