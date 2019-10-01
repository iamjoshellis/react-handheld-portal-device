import * as React from 'react';
import Portal from 'react-handheld-portal-device';

import * as S from './styles';
import { getAlignment, getStyle } from './utils';

const Tooltip = ({ children, alignX, alignY }) => (
  <Portal>
    {parentRect => {
      const { calcAlignX, calcAlignY } = getAlignment({
        parentRect,
        alignX,
        alignY,
      });
      return (
        <S.Wrap
          alignX={calcAlignX}
          alignY={calcAlignY}
          style={getStyle({
            parentRect,
            alignX: calcAlignX,
            alignY: calcAlignY,
          })}
        >
          {children}
        </S.Wrap>
      );
    }}
  </Portal>
);

const defaultProps = {
  alignY: 'auto',
  alignX: 'auto',
};

Tooltip.defaultProps = defaultProps;

export default Tooltip;
