import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const NavLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: tomato;
  }
`;
