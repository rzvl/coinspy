import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem 5rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightGray};
  p {
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    justify-content: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  column-gap: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    display: none;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: underline 0.1em rgba(255, 255, 255, 0);
  transition: text-decoration-color 300ms;
  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
