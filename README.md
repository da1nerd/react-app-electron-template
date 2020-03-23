# react-app-electron-template

This electron project template is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Typescript
Typescript comes pre-enabled. Just rename a `.js` file to `.ts` and restart your development server.
If a file contains [jsx](https://reactjs.org/docs/introducing-jsx.html) you must give it the file extension `.tsx`
Also, if you start using Typescript, you'll see a new file `src/react-app-env.d.ts`. For an explanation of that file see [typescript and create-react-app .env](https://dev.to/louisgv/typescript-and-create-react-app-env-136e) 

> NOTE: Typescript is only supported for everything under `src/`.
> The Electron main process under `electron/` must be in es5.

## Electron Configuration

This project has been configured to work with electron.

* `electron/index.js` is the electron entry point.
* `electron/electronWindows.js` provides some utilities for creating electron windows.
* `electron/webpack.config.js` controls compiling the Electron main process. 
* `main.js` is an alias to `electron/main.js` and provides an entry point for electron when running the development server.
* `public/index.html` is the file to which the Electron renderer process will be bound.
* `public/splash.html` is a sample splash screen configured to display while the app loads.

Inside `package.json` are some important configurations required to make electron work:
* `"main": "main.js"` connects the electron entry point
* `"homepage": "./"` ensures all resources are linked relative to the working directory so electron can find them.
* `start` and `build` have been carefully configured for running and building electron.
* `craco` is used in place of `react-scripts` to provide custom configuration without ejecting the app. This allows you to do things like `import electron from 'electron'` without blowing up the app.

Normally running the development server with `yarn start` would open a tab in your browser.
Since that doesn't make much sense for an electron app it can be rather annoying.
Therefore the new browser tab has been disabled by the addition of a `.env` file.

```
// .env
BROWSER=none
```

That's the extent of the electron integration. The app does not need to be ejected or configured further to work.

## Features

Beyond the standard create-react-app template are a few additional features.

### Splash page

A sample splash page is provided to give the user some semblance of progress while the app loads.
You can easily customize it, or disable it if needed.

### Log handler

A lightweight logger has been included that hijacks `console` and `window.onerror`.
All intercepted logs are passed to electron's main thread where they are recorded in a `console.log` file.
Just continue logging to the console like always and they will be automatically saved for later reference.
In order to keep things tidy the log file is truncated after it grows larger than 1mb.

### Developer Extensions

When ran in development mode (`NODE_ENV=development`) [React Developer Tools](https://github.com/facebook/react-devtools)
is installed to improve your development experience.

> NOTE: you may need to restart your application once before all the tools show up.

### Component prototyping with [Storybook](https://storybook.js.org/)

Prototyping components in an isolated environment is critical to well designed components. Not only does it save the headache of navigating all over the app just to see your updated component, but it also forces you to develop loosly coupled components.
Building a collection of "stories" also makes it easier to do some simple acceptence testing.

Details are in the scripts section below.

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs the story book server so you can develop and preview UI components in isolation.
See [Storybook](https://storybook.js.org/) for details and documentation.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn analyze`

Analyzes the built JavaScript bundles using the sourcemaps.
This helps you understand where code bloat is coming from.

```
yarn build
yarn analyze
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how to use Storybook, check out the [Storybook documentation](https://storybook.js.org/).

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
