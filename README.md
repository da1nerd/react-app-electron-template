This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Electron Support

This project has been configured to work with electron.

* `public/main.js` is the electron entry point.
* `main.js` is an alias to `public/main.js` and provides an entry point for electron when running the development server.
* `public/electronWindows.js` provides some utilities for creating electron windows.
* `public/splash.html` is a sample splash screen configured to display while the app loads.

Inside `package.json` are some important configurations required to make electron work:
* `"main": "main.js"` connects the electron entry point
* `"homepage": "./"` ensures all resources are linked relative to the working directory so electron can find them.
* `start`, `build`, `electron-start`, and `electron-build` have been carefully configured for running and building electron.

Normally running the development server with `yarn start` would open a tab in your browser.
Since that doesn't make much sense for an electron app it can be rather annoying.
Therefore the new browser tab has been disabled by the addition of a `.env` file.

```
// .env
BROWSER=none
```

That's the extent of the electron integration. The app does not need to be ejected or configured further to work.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
