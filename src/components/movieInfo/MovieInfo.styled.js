import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled(Link)`
  width: 100px;
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

export const InfoContainer = styled.div`
  position: relative;
`;
