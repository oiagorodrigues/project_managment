## Pure Typescript Project

Project, essentially, will manage projects inserted by the users.

It'll have two sections:
1. section with active projects;
2. section with finished projects.

We'll be able to drag & drop an item from one section to the other.

> This project was made in via the Maximilian's Udemy course [Understanding TypeScript - 2020 Edition](https://www.udemy.com/course/understanding-typescript/).
  
## Typescript functionalities used

* :white_check_mark: [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* :white_check_mark: [Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
* :white_check_mark: [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
* :white_check_mark: [Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
* :white_check_mark: [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
* :white_check_mark: [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
* :white_check_mark: [Enums](https://www.typescriptlang.org/docs/handbook/generics.html)
* :white_check_mark: [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
* :white_check_mark: [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
* :white_check_mark: [Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
* :white_check_mark: [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
* :white_large_square: [Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html)

## Webpack

Since the project structure ended up having lots of files, I've used webpack to do some magic.

* :white_check_mark: bundle files together
* :white_check_mark: compile typescript with [ts-loader](https://github.com/TypeStrong/ts-loader)
* :white_check_mark: minifying javascript code
* :white_check_mark: resolving `.ts` and `.js` extensions
* :white_check_mark: configured dev server
* :white_check_mark: production ready (basically)

## Instalation

### Install the packages
```js
  yarn install or
  npm install
```

### Run the dev server
```js
  yarn start or
  npm run start
```

### Run build
```js
  yarn build or
  npm run build
```
