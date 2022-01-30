import { useState } from "react";
import { useParams } from "react-router-dom";
import millify from 'millify';
import HTMLReactParser from "html-react-parser";
import { Container } from "../styles/Container.styled";
import { CoinDescription, CoinDetails, CoinLinks, CoinMainHeader, CoinStats, CoinStatsRow, CryptoTable } from "./styles/CryptoDetails.styled";
import { StyledCenteredSubtitle, StyledTitle } from "../styles/Title.styled";
import { useGetCryptoDetailsQuery, useGetCoinHistoryQuery } from "../services/cryptoApi";
import { AiOutlineMoneyCollect, AiOutlineDollarCircle, AiOutlineFund, AiOutlineExclamationCircle, AiOutlineStop, AiOutlineTrophy, AiOutlineCheck, AiOutlineNumber, AiOutlineThunderbolt, AiOutlineLink } from "react-icons/ai";
import LineChart from "../components/LineChart";

const CryptoDetails = () => {
  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCoinHistoryQuery({coinId, timePeriod});
  const cryptoDetails = data?.data?.coin;

  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`, icon: <AiOutlineDollarCircle size={25} color={'#7c3aed'} /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <AiOutlineNumber size={25} color={'#7c3aed'} /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails['24hVolume'])}`, icon: <AiOutlineThunderbolt size={25} color={'#7c3aed'} /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails.marketCap)}`, icon: <AiOutlineDollarCircle size={25} color={'#7c3aed'} /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh && millify(cryptoDetails.allTimeHigh.price)}`, icon: <AiOutlineTrophy size={25} color={'#7c3aed'} /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AiOutlineFund size={25} color={'#7c3aed'} /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AiOutlineMoneyCollect size={25} color={'#7c3aed'} /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle size={25} color={'#7c3aed'} /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails.supply.total)}`, icon: <AiOutlineExclamationCircle size={25} color={'#7c3aed'} /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails.supply.circulating)}`, icon: <AiOutlineExclamationCircle size={25} color={'#7c3aed'} /> },
  ];

  if(isFetching) return 'Loading...';

  return (
    <Container>
      <CoinDetails>
        <CoinMainHeader>
          <img src={cryptoDetails.iconUrl} alt="" width={40} />
          <StyledTitle>
            {cryptoDetails.name} ({cryptoDetails.symbol}) price
          </StyledTitle>
        </CoinMainHeader>
        <StyledCenteredSubtitle>
          {cryptoDetails.name} price in US dollars. View value statistics market cap and supply.
        </StyledCenteredSubtitle>
        {/* Line Chart */}
        <CryptoTable>
          <select name="select-timeperiod" defaultValue={'7d'} placeholder="Select Time Period" onChange={e => {
            setTimePeriod(e.target.value);
            }} >
            {time.map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
          <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
        </CryptoTable>
        {/* Coin Statistics */}
        <CoinStats>
          <div>
            <h3>{cryptoDetails.name} Value Statistics</h3>
            <h4>An overview showing the stats of {cryptoDetails.name}</h4>
            {stats.map(({icon, title, value}) => (
              <CoinStatsRow key={title} >
                <div>{icon} {title}</div>
                <div>{value}</div>
              </CoinStatsRow>
            ))}
          </div>
          {/* Other Statistics */}
          <div>
            <h3>Other Statistics</h3>
            <h4>An overview showing the stats of all cryptocurrencies</h4>
            {genericStats.map(({icon, title, value}) => (
              <CoinStatsRow key={title}>
                <div>{icon} {title}</div>
                <div>{value}</div>
              </CoinStatsRow>
            ))}
          </div>
        </CoinStats>
          {/* Coin Description */}
          <CoinDescription>
          <article>
            <h3>What is {cryptoDetails.name}</h3>
            <div>{HTMLReactParser(cryptoDetails.description)}</div>
          </article>
          {/* Coin Links */}
          <div>
            <h3>{cryptoDetails.name} Links</h3>
            {cryptoDetails.links.map((link, idx) => (
              <CoinStatsRow key={idx}>
                <div><AiOutlineLink /> {link.type}</div>
                <div><a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></div>
              </CoinStatsRow>
            ))}
          </div>
          </CoinDescription>
      </CoinDetails>
    </Container>
  );
};

export default CryptoDetails;
