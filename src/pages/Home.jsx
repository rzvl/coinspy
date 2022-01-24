import millify from 'millify';
import StatsCard from '../components/StatsCard';
import { Container } from '../styles/Container.styled';
import { StyledCenteredTitle, StyledCenteredSubtitle } from '../styles/Title.styled';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery();
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
    </Container>
  );
};

export default Home;