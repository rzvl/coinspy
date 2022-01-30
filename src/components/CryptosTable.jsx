import { useEffect, useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { StyledCryptosTable, RowLink, SearchCryptos } from './styles/CryptosTable.styled';

const CryptosTable = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptosList, searchTerm])

  if(isFetching) return 'Loading...';
  
  return (
    <StyledCryptosTable>
      {!simplified &&
        <SearchCryptos>
          <input type="text" placeholder="Search Cryptocurrency" onChange={e => setSearchTerm(e.target.value)} />
        </SearchCryptos>
      }
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h</th>
          </tr>
        </thead>
        <tbody>
          {cryptos?.map(currency => (
          <tr key={currency.uuid}>
            <td><RowLink to={`/crypto/${currency.uuid}`}>{currency.rank}</RowLink></td>
            <td>
              <RowLink to={`/crypto/${currency.uuid}`}>
                <span className='cryptos-col'>
                  <img src={currency.iconUrl} alt="" width={25} />
                  <span>{currency.name}</span>
                  <span>{currency.symbol}</span>
                </span>
              </RowLink>
            </td>
            <td><RowLink to={`/crypto/${currency.uuid}`}>${millify(currency.price)}</RowLink></td>
            <td><RowLink to={`/crypto/${currency.uuid}`}>{millify(currency.marketCap)}</RowLink></td>
            <td><RowLink to={`/crypto/${currency.uuid}`}>{millify(currency.change)}%</RowLink></td>
          </tr>
          ))}
        </tbody>
      </table>
    </StyledCryptosTable>
  );
};

export default CryptosTable;
