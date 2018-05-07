# React Handheld Portal Device

[![Build Status](https://travis-ci.org/iamjoshellis/react-handheld-portal-device.svg?branch=master)](https://travis-ci.org/iamjoshellis/react-handheld-portal-device)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/react-handheld-portal-device.svg)](https://www.npmjs.com/package/react-handheld-portal-device)

Perfectly positioned portals... 📏

Usage example:

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

`Content` will be in rendered in the same position and same dimensions as `Parent` via a portal (appended to `document.body`), making relative positioning essentially the same as if `Content` was a direct descendant of `Parent` in the DOM. Magic. ✨