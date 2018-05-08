# React Handheld Portal Device

[![Build Status](https://travis-ci.org/iamjoshellis/react-handheld-portal-device.svg?branch=master)](https://travis-ci.org/iamjoshellis/react-handheld-portal-device)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/react-handheld-portal-device.svg)](https://www.npmjs.com/package/react-handheld-portal-device)

Perfectly positioned portals... 📏

Makes positioning portaled tooltips/dropdowns/etc a piece of cake 🍰, just like they were in the same DOM hierarchy.

## Usage

```js
import React from 'react';
import Portal from 'react-handheld-portal-device';

const Component = () => (
  <Parent>
    <Portal>
      <Content>
    </Portal>
  </Parent>
);
```

`Content` will be in rendered in the same position with the dimensions as `Parent` via a portal (appended to `document.body`), making positioning essentially the same as if `Content` was a direct descendant of `Parent` in the DOM. 
Magic. ✨

## Props

```js
class Portal extends React.Component {
  static propTypes = {
    debounce: PropTypes.number, // set the debounce time for event listeners
    style: PropTypes.number, // overide the style of the fixed postion div in the portal
    ...  // all other props are spread to the fixed postion div in the portal
  };

  static defaultProps = {
    debounce: 50,
  };

  ...
}
```

## Gotchas 

The fixed postion div in the portal has the style attribute `pointerEvents: none` to prevent it getting in the way of what ever is "below" it. To restore pointer events to the `Portal`'s children just style them with `pointerEvents: all` (or overide portal style) to restore clickablity!