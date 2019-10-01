import { triangle } from 'polished';
import styled, { css, keyframes } from 'styled-components';

import { TIP_HEIGHT, TIP_OFFSET_X, TIP_WIDTH } from './utils';

const animations = {
  top: transformX => keyframes`
  from {
    opacity: 0;
    transform: translate(${transformX}, calc(-100% + 5px));
  }
`,
  bottom: transformX => keyframes`
  from {
    opacity: 0;
    transform: translate(${transformX}, -5px);
  }
`,
};

const alignmentsY = {
  bottom: props => css`
    &:after {
      bottom: 100%;
      ${triangle({
        pointingDirection: 'top',
        width: `${TIP_WIDTH}px`,
        height: `${TIP_HEIGHT}px`,
        foregroundColor: '#fff',
        backgroundColor: 'transparent',
      })};
    }
  `,
  top: props => css`
    &:after {
      top: 100%;
      ${triangle({
        pointingDirection: 'bottom',
        width: `${TIP_WIDTH}px`,
        height: `${TIP_HEIGHT}px`,
        foregroundColor: '#fff',
        backgroundColor: 'transparent',
      })};
    }
  `,
};

const alignmentsX = {
  center: props => css`
    transform: translate(-50%, ${props.alignY === 'bottom' ? 0 : '-100%'});
    animation-name: ${animations[props.alignY]('-50%')};
    &:after {
      left: 50%;
      transform: translate(-50%, 0);
    }
  `,
  left: props => css`
    transform: translate(0, ${props.alignY === 'bottom' ? 0 : '-100%'});
    animation-name: ${animations[props.alignY]('0')};
    &:after {
      left: ${TIP_OFFSET_X}px;
      transform: translate(1px, 0);
    }
  `,
  right: props => css`
    transform: translate(-100%, ${props.alignY === 'bottom' ? 0 : '-100%'});
    animation-name: ${animations[props.alignY]('-100%')};
    &:after {
      right: ${TIP_OFFSET_X}px;
      transform: translate(-1px, 0);
    }
  `,
};

export const Wrap = styled.span`
  background: #fff;
  border-radius: 3px;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0;
  filter: drop-shadow(0);
  padding: 0.5em;
  position: fixed;
  width: max-content;
  width: intrinsic;
  pointer-events: all;
  min-width: ${TIP_OFFSET_X + 8 + 3}px;
  animation-duration: 200ms;
  animation-timing-function: ease-out;
  &:after {
    content: '';
    position: absolute;
  }
  ${({ alignX = 'auto', alignY = 'auto' }) => css`
    ${alignmentsX[alignX]};
    ${alignmentsY[alignY]};
  `};
`;
