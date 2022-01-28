import millify from 'millify';
import { CryptosTable, StatsCard } from '../components'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { StyledCenteredTitle, StyledCenteredSubtitle } from '../styles/Title.styled';
import { Container } from '../styles/Container.styled';
import ShowMoreBtn from '../components/ShowMoreBtn';
import CryptoNewsList from '../components/CryptoNewsList';

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...';

  const marketStats = [
    {
      dt: 'Cryptocurrencies',
      dd: globalStats.total,
    },
    {
      dt: 'Market Cap',
      dd: millify(globalStats.totalMarketCap),
    },
    {
      dt: 'Markets',
      dd: millify(globalStats.totalMarkets),
    },
    {
      dt: 'Exchanges',
      dd: millify(globalStats.totalExchanges),
    },
    {
      dt: '24h volume',
      dd: millify(globalStats.total24hVolume),
    },
  ];

  return (
    <Container>
      <StyledCenteredTitle>Global Crypto Stats</StyledCenteredTitle>
      <StyledCenteredSubtitle>Total Cryptocurrencies and Market Stats</StyledCenteredSubtitle>
      <StatsCard list={marketStats} />
      <StyledCenteredTitle>Top 10 Cryptos by Market Cap</StyledCenteredTitle>
      <CryptosTable simplified />
      <ShowMoreBtn text={'Show More Cryptos'} to={'cryptocurrencies'} />
      <hr />
      <StyledCenteredTitle>Latest Crypto News</StyledCenteredTitle>
      <CryptoNewsList simplified />
      <ShowMoreBtn text={'Show More News'} to={'news'} />
    </Container>
  );
};

export default Home;