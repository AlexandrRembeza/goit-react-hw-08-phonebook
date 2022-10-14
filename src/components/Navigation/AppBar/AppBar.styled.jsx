import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 5px;
  color: rgb(16, 16, 144);
  text-decoration: none;
  transition: background-color 200ms ease-in-out;

  &:last-of-type {
    margin-left: 30px;
  }

  &:not(.acive):hover,
  &:not(.acive):focus {
    color: #ffffff;
    background-color: rgb(16, 16, 144);
  }

  &.active {
    color: #ffffff;
    background-color: rgb(16, 16, 144);
  }
`;
