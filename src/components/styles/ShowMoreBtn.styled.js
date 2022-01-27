import styled from 'styled-components';

export const StyledShowMoreBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purple};
    border: 2px solid ${({ theme }) => theme.colors.purple};
    transition-property: color;
    transition-timing-function: ease-out;
    transition-duration: 500ms;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
