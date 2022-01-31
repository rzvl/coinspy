import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  position: absolute;
  z-index: 50;
  top: 6rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  .active {
    background-color: ${({ theme }) => theme.colors.purple};
    color: white !important;
    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const MobileMenuLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 1.6rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.gray};
  background-color: #ede9fe;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;
  transition-property: color;
  transition-timing-function: ease-in;
  transition-duration: 150ms;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
