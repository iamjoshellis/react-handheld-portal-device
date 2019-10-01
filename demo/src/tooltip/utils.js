export const ALIGNMENTS_Y = ['auto', 'bottom', 'top'];
export const ALIGNMENTS_X = ['auto', 'left', 'center', 'right'];
export const MARGIN = 10;
export const TIP_HEIGHT = 6;
export const TIP_WIDTH = 8;
export const TIP_OFFSET_X = 2;

export const getStyle = ({ parentRect, alignX, alignY }) => {
  const { innerWidth } = window;
  const { width, height } = parentRect;
  let { left, top } = parentRect;
  const MAX_WIDTH = innerWidth + MARGIN * 2;
  let maxWidth = 0;
  if (alignX === 'left') {
    maxWidth = innerWidth - left - MARGIN;
  }
  if (alignX === 'right') {
    left += width;
    maxWidth = left - MARGIN * 2;
  }
  if (alignX === 'center') {
    left += width / 2;
    maxWidth =
      left - width / 2 > innerWidth / 2 ? (innerWidth - left) * 2 - MARGIN : left * 2 - MARGIN;
  }
  if (alignY === 'top') {
    top -= TIP_HEIGHT;
  }
  if (alignY === 'bottom') {
    top = top + height + TIP_HEIGHT;
  }
  maxWidth = Math.min(maxWidth, MAX_WIDTH);
  return {
    top: isNaN(top) ? undefined : top,
    left: isNaN(left) ? undefined : left,
    maxWidth: isNaN(maxWidth) ? undefined : maxWidth,
  };
};

export const getAlignment = ({ parentRect, alignX, alignY }) => {
  const { innerWidth, innerHeight } = window;
  const { top, left, width, height } = parentRect;
  const calcAlignY =
    (alignY !== 'auto' && alignY) || (top - height / 2 > innerHeight / 2 && 'top') || 'bottom';
  const calcAlignX =
    (alignX !== 'auto' && alignX) ||
    (left + width / 2 < innerWidth * 0.25 && 'left') ||
    (left + width / 2 > innerWidth * 0.75 && 'right') ||
    'center';
  return { calcAlignX, calcAlignY };
};
