import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  padding: 10px 20px;
  margin-left: 20px;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;
  color: black;

  &.active {
    color: #fff;
    border-color: #fff;
    background-color: rgb(137, 126, 133);
  }
`;

export const NavButton = styled.button`
  font-size: 22px;
  padding: 10px 20px;
  margin-left: 20px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Navigation = styled.nav`
  padding: 20px 20px 50px;
`;

export const Header = styled.header`
  max-width: 760px;
  margin: 0 auto;
`;
