# better-electron-template
> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Thanks to the power of `electron-webpack` this template comes packed with...

* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

## Getting Started
Simply clone down this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# create a directory of your choice, and copy template using curl
mkdir new-electron-webpack-project && cd new-electron-webpack-project
curl -fsSL https://github.com/electron-userland/electron-webpack-quick-start/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/electron-userland/electron-webpack-quick-start.git
cd electron-webpack-quick-start
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

### Modifications

I've made a few additions to make this more helpful for complicate applications.

#### Splash Window

There's a separate entry point for the splash window.
This allows the splash screen to display quickly without having to load _all_ of the resources.
You can adjust styles and add markup as desired.

#### React Windows

Except for the splash screen all windows are routed through a single `.html` file.
These windows will display unique content based on their id.
For example, the `main` window will load from `src/renderer/windows/main.js`.

This saves us from a lot of legwork:

* avoids the need to configure additional webpack entry points
* avoids needing a lot of add-once-and-forget `.html` files.
* avoids having to wire up HMR (Hot Module Replacement) for each window.
* better window performance. Because this is a single webpack entry point, all of the resources will be loaded the first time (while the splash window is displaying).
