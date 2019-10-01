import React from 'react';
import { configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from "@storybook/react";

import * as S from './styles';

addDecorator(withKnobs);
addDecorator(story => (
  <>
    <S.GlobalStyle />
    {story()}
  </>
));

const req = require.context('../src', true, /stories\.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
