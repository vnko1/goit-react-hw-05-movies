import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding-top: 10px;
  opacity: 0;
  transition: opacity 1500ms;

  &.loaded {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;
export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const PageLink = styled(Link)`
  width: 100px;
  margin: 0;
  text-align: center;
  color: black;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: tomato;
  }
`;
