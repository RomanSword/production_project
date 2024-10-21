# FSD example project

### What interesting in this project
- FSD architecture;
- React, Redux, css-modules, code splitting for components and store slices;
- Light and Dark themes;
- Eslint, Stylelint, Prettier;
- React Testing Library, Jest, Storybook, Screenshot tests.

### How to install
From root dir do in terminal:

    $ yarn

### How to launch locally
From root dir do in terminal:
    Launch backend on Json-Server
    $ yarn serve:jsonServer

    Launch frontend on webpack
    $ yarn serve:dev

Optionally you can do:
    Launch Storybook
    $ yarn storybook:dev

    Launch Stylelint
    $ yarn stylelint

    Launch Eslint
    $ yarn lint:fix

    Launch Eslint TS check
    $ yarn lint:tsCheck

    Launch unit tests
    $ yarn test:unit

    Launch ui/screenshot tests
    $ yarn test:ui

    Generate visual report about ui diffs (report.html will be in .loki dir)
    $ yarn visual:report:html
