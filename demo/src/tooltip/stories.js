import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';

import Tooltip from './index';
import { ALIGNMENTS_Y, ALIGNMENTS_X } from './utils';

const Moveable = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const OPTIONS = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

export const knobs = (prefix = '') => ({
  alignY: select(`${prefix}alignY`, ALIGNMENTS_Y, ALIGNMENTS_Y[0]),
  alignX: select(`${prefix}alignX`, ALIGNMENTS_X, ALIGNMENTS_X[0]),
});

storiesOf('Portal Device 🌀', module).add('Tooltip', () => {
  const top = `${number('top', 50, OPTIONS)}%`;
  const left = `${number('left', 50, OPTIONS)}%`;
  return (
    <Moveable style={{ top, left }}>
      {<Tooltip {...knobs()}>{text('children', 'children')}</Tooltip>}
    </Moveable>
  );
});
