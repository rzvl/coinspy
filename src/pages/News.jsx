import CryptoNewsList from '../components/CryptoNewsList';
import { Container } from '../styles/Container.styled';
import { StyledCenteredTitle } from '../styles/Title.styled';

const News = () => {
  return (
    <Container>
      <StyledCenteredTitle>Latest Crypto News</StyledCenteredTitle>
      <CryptoNewsList />
    </Container>
  );
};

export default News;