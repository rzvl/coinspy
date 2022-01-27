import { useState, useEffect } from 'react';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import moment from 'moment';

const CryptoNewsList = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({newsCategory: 'cryptocurrency', count: count});
  // const [cryptos, setCryptos] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  //   setCryptos(filteredData);
  // }, [cryptosList, searchTerm])

  if(isFetching) return 'Loading...';

  console.log(cryptoNews);

  return <div></div>;
};

export default CryptoNewsList;