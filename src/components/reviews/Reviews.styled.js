import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 1500ms;

  &.listLoaded {
    opacity: 1;
  }
`;
