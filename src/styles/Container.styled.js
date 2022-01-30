import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 0 2rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    padding: 1rem;
  }
`;
