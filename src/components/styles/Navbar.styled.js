import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.header`
  position: relative;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  .active {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.6rem;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  transition-property: color;
  transition-timing-function: ease-in;
  transition-duration: 150ms;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

export const HamburgurMenu = styled.div`
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
`;
