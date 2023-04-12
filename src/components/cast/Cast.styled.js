import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 500ms, transform 500ms;
  position: absolute;
  top: 100px;
  left: 0;
  &.loaded {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CastItem = styled.li`
  max-width: 180px;
`;
