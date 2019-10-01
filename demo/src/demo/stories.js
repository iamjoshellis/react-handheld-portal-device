import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import Portal from 'react-handheld-portal-device';
import * as S from './styles';

const OPTIONS = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

const getParentStyle = () => ({
  top: `${number('dest top', 50, OPTIONS)}%`,
  left: `${number('dest left', 50, OPTIONS)}%`,
});

const Demo = () => (
  <S.Parent style={getParentStyle()}>
    <div>Parent 👩‍👦</div>
    <Portal>
      {parentRect => (
        <S.Content
          style={{
            top: parentRect.top,
            left: parentRect.left,
            height: parentRect.height,
            width: parentRect.width,
            display: boolean('Show Portal', true) ? undefined : 'none',
          }}
        >
          <div>Portal 🌀</div>
        </S.Content>
      )}
    </Portal>
  </S.Parent>
);

storiesOf('Portal Device 🌀', module).add('Demo', () => <Demo />);


