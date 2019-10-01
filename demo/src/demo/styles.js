import styled, { css } from 'styled-components';

const SHARED_CSS = css`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 6px;
  font-weight: bold;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`;

export const Parent = styled.div`
  ${SHARED_CSS};
  background: #4286f4;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  ${SHARED_CSS};
  position: fixed;
  background: #fff;
`;