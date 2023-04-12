import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 1500ms;

  &.loaded {
    opacity: 1;
  }
`;

export const CastItem = styled.li`
  max-width: 180px;
`;
