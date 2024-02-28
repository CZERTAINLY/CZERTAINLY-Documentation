# CZERTAINLY Documentation

> This repository is part of the open source project CZERTAINLY. You can find more information about the project at [CZERTAINLY](https://github.com/3KeyCompany/CZERTAINLY) repository, including the contribution guide.

CZERTAINLY documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to contribute

The contribution is easy, fork the repository and make a pull request with your changes.
For the contribution guide to the CZERTAINLY, refer to [CZERTAINLY](https://github.com/3KeyCompany/CZERTAINLY) repository.

To learn how to work with Docusaurus, refer to the [Docusaurus documentation](https://docusaurus.io/docs/).

## How to work with the documentation

- Install [`npm`](https://github.com/nodesource/distributions) from offical site.
- Install [`yarn`](https://yarnpkg.com/getting-started/install) from offical site.
- Use `yarn install` for installation of the documentation modules and dependencies.
- Use `yarn start` to start a local development server providing a rendered version of your local copy of the documentation. It will be typically available on http://localhost:3000/ and browser window should automatically open up for you.
- Use `yarn build` for building the documentation. This command generates static content into the `build` directory.

### Notes for running on a Debian Linux

The versions of `npm` and `yarn` (provided as `yarnpkg`) are obsoleted in Debian 10. It is possible to download `npm` packaged as a Debian package from the official site listed above.

`yarn` is not officially provided as a Debian package. The [official installation](https://yarnpkg.com/getting-started/install) process requires root privileges. It is possible to install it locally using `npm install yarn` into the current directory, for example, if you exec install in your home, it will create `node_modules` directory with all its components. Later it can be used as `~/mode_modules/.bin/yarn start` to execute local development server showing a rendered version of the documentation.