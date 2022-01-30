import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import moment from 'moment';
import { PostCard, CtaLink, StyledCryptoNewsList, PostMetaData } from './styles/CryptoNewsList.styled';

const CryptoNewsList = ({simplified}) => {
  const count = simplified ? 6 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'cryptocurrency', count: count});

  if(!cryptoNews?.value) return 'Loading...';

  const extractDomain = url => {
    return url.replace(/^(?:https?:\/\/)?(?:[^\/]+\.)?([^.\/]+\.[^.\/]+).*$/, "$1");
  }

  return (
    <StyledCryptoNewsList>
      {cryptoNews?.value?.map((news, idx) => (
        <PostCard key={idx}>
          <PostMetaData>
            <a className="tag" href={`https://${extractDomain(news.url)}`} target="_blank" rel="noreferrer">
              {extractDomain(news.url)}
            </a>
            <span>{moment(news.datePublished).startOf('ss').fromNow()}</span>
          </PostMetaData>
          <a href={news.url} target="_blank" rel="noreferrer">
            <h3>{news.name}</h3>
            <p>{ news.description ? `${news.description.substring(0, 150)}...` : news.description }</p>
          </a>
          <CtaLink>
            <a href={news.url} target="_blank" rel="noreferrer">Read full story</a>
          </CtaLink>
        </PostCard>
      ))}
    </StyledCryptoNewsList>
  );
};

export default CryptoNewsList;