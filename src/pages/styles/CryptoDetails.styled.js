import styled from 'styled-components';

export const CoinDetails = styled.div`
  width: 100%;
`;

export const CoinMainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0 0.5rem;
  h2 {
    margin: 0;
  }
`;

export const CryptoTable = styled.div`
  max-width: 80rem;
  margin: 5rem auto;
`;

export const CoinStats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  & > div {
    width: 50%;
    padding: 2rem;
  }
  h3 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.gray};
  }
  & > div > div:nth-child(even) {
    background-color: #f3f4f6;
    &:hover {
      background-color: #ede9fe;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

export const CoinStatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  &:hover {
    background-color: #ede9fe;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  div:last-child {
    font-weight: bold;
  }
`;

export const CoinDescription = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin: 5rem 0;
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
  }
  article {
    flex: 1;
    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.gray};
      line-height: 1.7;
    }
  }
  & > div {
    flex: 1;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.purple};
  }
  & > div > div:nth-child(even) {
    background-color: #f3f4f6;
    &:hover {
      background-color: #ede9fe;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;
