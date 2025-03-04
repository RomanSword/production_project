# Experimental project
- What about this project? Nothing special. In this repo i just try some interesting things from frontend. 

### What interesting in frontend part of this project
- FSD architecture;
- TS, React, Redux, css-modules, code splitting for components and store slices;
- Light and Dark themes;
- Eslint, Stylelint, Prettier, Husky;
- React Testing Library, Jest, Storybook, Screenshot tests.

### How to install
From root dir do in terminal:

    - Install all needed node modules
    $ yarn

### How to launch locally
From root dir do in terminal:

    - Launch backend on Json-Server
    $ yarn serve:jsonServer

    - Launch frontend on webpack
    $ yarn serve:dev

    - Launch frontend and backend at once
    $ yarn serve

Optionally you can do:

    - Launch Storybook
    $ yarn storybook:dev

    - Launch Stylelint
    $ yarn stylelint

    - Launch Eslint
    $ yarn lint:fix

    - Launch Eslint TS check
    $ yarn lint:tsCheck

    - Launch unit tests
    $ yarn test:unit

    - Initial launch ui/screenshot tests
    $ yarn test:ui

    - Build storybook for ci tests
    $ yarn storybook:build

    - Launch ui/screenshot tests with refs and with builded storybook
    $ yarn test:ui:ci

    - Accept diffs in test screenshots
    $ yarn test:ui:ok

    - Generate visual report about ui diffs (report.html will be in .loki dir) (need to launch by some live server)
    $ yarn visual:report:html
