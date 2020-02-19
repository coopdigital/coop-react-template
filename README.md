# Coop Retail IT React Starter

[![Build Status](https://dev.azure.com/co-operative/Store%20Futures/_apis/build/status/coop_react_boilerplate?branchName=master)](https://dev.azure.com/co-operative/Store%20Futures/_build/latest?definitionId=120&branchName=master)

## Overview

This project is a starter template for React applications.

The aim of the template is to help guide a common approach, making it easier to get building quicker and to ensure that each app meets the required development standards.

## Getting Started

1. Clone this repo to a new folder for your project

```
git clone https://co-operative@dev.azure.com/co-operative/Store%20Futures/_git/coop_react_boilerplate <NEW_PROJECT_NAME>
```

2. Update the `git origin` to be the repo of your new project

```
git remote set-url origin <NEW_GIT_URL>
```

3. Use `npm` to install the project dependences

```
npm install
```

4. Start the React web server

```
npm start
```

> **Check for any new security vulnerabilities**
>
> ```
> npm audit
> ```
>
> For issues cause by outdated packages run `npm audit fix` to resolve the issues.
>
> To ensure that the template stays up to date please submit `Pull` requests when security issue are found.

### Set the project name in the following locations

- `public/index.html` - `<meta name="description">` and `<title>`
- `public/manifest.json` - `short_name` and `name`
- `package.json` - `name`

## TypeScript

`TypeScript` is a typed superset of JavaScript. The introduction of types makes it easier to catch errors early and offers improve intellisense.

See [here](https://www.typescriptlang.org/docs/home.html) for a starter guide.

See the [UCP Docs](https://cpdocs.azurewebsites.net/#/developer/coding-standards?id=typescript) for the TypeScript naming standards.

## Debugging

> Note: Before debugging make sure that the server is running (`npm start`)

Press `F5` to start debugging using `Chrome`. To debug failing test use the `Jest` VSCode extension.

## Tests

It is important to add unit tests for you app.

> You should aim to have a code coverage of at least **80%**.

Run the command `npm run test` to start the test runner. This will monitor file changes and automatically run the tests as you dev.

Alternatively the following command `npm run test:ci` will run the tests and generate coverage reports in the `/test` folder.

If you have installed the [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) extension, select the `Watch` button in the status bar to display coverage in the editor.

## Build

In the root of the project there is an `azure-pipelines.yml` file. Use this file to setup a new Build Pipeline in Azure DevOps. The build includes Unit Tests, Code Coverage and WhiteBolt Open Source Scanner.

## Recommendations

The following are some recommendations for scaling this template.

## MobX Stores

The MobX store pattern allows you to segregated your state and business logic. Try to create new Stores for different domains. For instance a basic POS might have separate State, Basket, Product and Alert stores. See the [UCP Basket Builder](https://dev.azure.com/co-operative/Commerce%20Platform%20-%20Transaction%20Stream/_git/DemoPos) for an example. The `RootStore` allows you to access stores from components (via the `useStores()` hook) and for stores to access other stores.

### Multi-page Apps

This starter implements a basic `StateStore` and `StateRouter` for controlling the rendered page.

If you app has a large number of states you may want to consider updating the `StateStore` to implement a `State Machine`.

If you need users to be able to browser your app via different `Urls` you could update the `StateRouter` to implement `ReactRouter`.

### Forms

For basic form inputs standard React should meet your needs but if you need more complex form logic and validation then take a look at [react-hook-form](https://react-hook-form.com/) which includes a `useForms` hook and support `YUP` validation.

### On-screen Keyboard

If you require an on-screen keyboard have a look at [react-virtual-keyboard](https://www.npmjs.com/package/react-virtual-keyboard) or [react-simple-keyboard](https://www.npmjs.com/package/react-simple-keyboard)
