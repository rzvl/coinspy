import styled from 'styled-components';

export const StyledCryptoNewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin: 2rem auto;
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.8rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 5rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: #6b7280;
    margin: 0;
  }
`;

export const CtaLink = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

export const PostMetaData = styled.p`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.4rem;
  }
  .tag {
    background-color: #ede9fe;
    color: #5b21b6;
    padding: 0 1.2rem;
    border-radius: 9999px;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
