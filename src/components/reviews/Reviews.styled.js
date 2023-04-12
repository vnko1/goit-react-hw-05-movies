import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 1000ms;
  position: absolute;
  top: 100px;
  left: 0;
  &.listLoaded {
    opacity: 1;
  }
`;
