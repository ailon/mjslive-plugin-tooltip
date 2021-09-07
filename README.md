
# Tooltip plugin for marker.js Live

This plugin adds tooltip functionality to your instance of marker.js Live. 
It displays `notes` field of markers as a tooltip 
using [Tippy.js](https://atomiks.github.io/tippyjs/)

## Installation

Make sure you have [marker.js Live] installed. Then run

```
npm install tippy.js mjslive-plugin-tooltip
```

or 

```
yarn add tippy.js mjslive-plugin-tooltip
```

## Usage

To add the functionality to marker.js Live instance simply create a new instance of `Tooltip`, configure it and add it via the `addPlugins()` method.

```
import { Tooltip } from 'mjslive-plugin-tooltip';

...
const tooltip = new Tooltip();
tooltip.followCursor = true;
markerView.addPlugin(tooltip);

markerView1.show(markerViewState);

```

## Configuration

Tooltip plugin object has the following properties:

- `showArrow` - when set to `true` displays tooltip's tip (arrow). Defaults to `false`.
- `allowHTML` - if set to `true` assumes that the content of `notes` is HTML and 
renders it as is. Warning: make sure you trust the source of your markers 
before turning this on. Default - `false`.
- `followCursor` - when set to `true` the tooltip will follow mouse cursor. Defaults to `false`.
- `theme` - can be use to specify custom Tippy theme. 
See [Tippy.js documentation](https://atomiks.github.io/tippyjs/v6/themes/) for details.

## Credits

This plugin's functionality relies on [Tippy.js](https://atomiks.github.io/tippyjs/)
by atomiks.

## License

This [marker.js Live] plugin is distributed under the MIT License. See LICENSE file for details.

[marker.js Live]: https://markerjs.com/products/markerjs-live