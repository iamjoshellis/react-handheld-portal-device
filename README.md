# React Handheld Portal Device 🌀

[![npm](https://img.shields.io/npm/v/react-handheld-portal-device.svg)](https://www.npmjs.com/package/react-handheld-portal-device)
[![Build Status](https://travis-ci.org/iamjoshellis/react-handheld-portal-device.svg?branch=master)](https://travis-ci.org/iamjoshellis/react-handheld-portal-device)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/272360d2-7d92-4380-bb87-3715c9529cad/deploy-status)](https://app.netlify.com/sites/react-handheld-portal-device/deploys)

Makes positioning portaled tooltips/dropdowns/etc a piece of cake 🍰!

## [Demo](https://react-handheld-portal-device.netlify.com/)

## Usage

```js
import React from 'react';
import Portal from 'react-handheld-portal-device';

const Component = () => (
  <Parent>
    <Portal>
      (parentRect => <Content style={{ position: 'fixed', top: parentRect.top, left: parentRect.left,  }} />)
    </Portal>
  </Parent>
);
```

Using the render props pattern the `Content` can be "aware" of `Parent`'s `parentRect`, which is the result of calling `getBoundingClientRect` on the `Parent` DOM node.


## Props

```js
class Portal extends React.Component {
  static propTypes = {
    debounce: PropTypes.number, // set the debounce time for event listeners
  };

  static defaultProps = {
    debounce: 16,
  };

  ...
}
```