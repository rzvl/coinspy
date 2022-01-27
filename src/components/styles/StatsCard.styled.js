import styled from 'styled-components';

export const DataList = styled.dl`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin: 2rem auto 5rem;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  dt {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
    order: 2;
  }
  dd {
    margin: 0;
    padding: 0;
    font-size: 4.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.purple};
    order: 1;
  }
`;
