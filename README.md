
# Plugin development starter project

This repository is a starter project for developing plugins for [marker.js Live](https://markerjs.com/products/markerjs-live). It is not necessary to use it as your starting point but it provides everything you need to quickly develop a plugin with no additional setup required.

## How to use this starter kit to develop your own plugin
1. Fork/download the code for this project (remember to remove the git repo association)
2. Run `yarn` to install dependencies.
3. Rename `/src/Todo.ts` and the class inside to reflect the plugin you are developing. If using VS Code I suggest you use the "Rename symbol" functionality (F2) to rename all the references.
4. Find all occurances of the word "todo" and replace accordingly.
5. Use the code under `/test/manual` to manuall test while developing. Run `yarn start` to start a dev server/debugging session.
6. run `yarn build` to build redistributable files (under `/dist`).
7. run `yarn docs` to generate reference documentation (if needed).




Below is a sample readme for your plugin. TODO remove the above part (and this line) before publishing.

---


# TODO plugin for marker.js Live

This plugin TODO.

## Installation

Make sure you have [marker.js Live] installed. Then run

```
npm install mjslive-plugin-todo
```

or 

```
yarn add mjslive-plugin-todo
```

## Usage

To add the functionality to marker.js Live instance simply pass a new instance of `Todo` to its `addPlugins()` method.

```
import { Todo } from 'mjslive-plugin-todo';

...
markerView.addPlugin(new Todo());

markerView1.show(markerViewState);

```

## Configuration

Todo plugin object has the following properties:

## License

This [marker.js Live] plugin is distributed under the MIT License. See LICENSE file for details.

[marker.js Live]: https://markerjs.com/products/markerjs-live