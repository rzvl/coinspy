import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCryptosTable = styled.div`
  width: 100%;
  margin: 2rem 0;
  table {
    table-layout: fixed;
    border-collapse: collapse;
    min-width: 100%;
    font-size: 1.5rem;
  }
  thead {
    position: sticky;
    top: 0;
    font-size: 1.5rem;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
  thead tr {
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
  th,
  td {
    padding: 2rem 1rem;
  }
  thead th:nth-child(1) {
    width: 10%;
  }
  thead th:nth-child(2) {
    width: 40%;
  }
  thead th:nth-child(3) {
    width: 20%;
  }
  thead th:nth-child(4) {
    width: 20%;
  }
  thead th:nth-child(5) {
    width: 10%;
  }
  tbody tr:nth-child(odd) {
    background-color: #f9fafb;
    transition-property: color;
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    &:hover {
      background-color: #f3f4f6;
    }
  }

  tbody tr:nth-child(even) {
    background-color: #f5f3ff;
    transition-property: color;
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    &:hover {
      background-color: #ede9fe;
    }
  }
`;

export const RowLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  .cryptos-col {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 1rem;
  }
`;

export const SearchCryptos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 90%;
    max-width: 60rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.purple};
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }
`;
