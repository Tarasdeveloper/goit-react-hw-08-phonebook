import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  padding: 15px 25px;
  margin-left: 20px;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: blue;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s;

  &.active {
    background-color: yellow;
    color: black;
    border-color: blueviolet;
  }
`;
