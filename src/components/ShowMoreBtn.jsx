import { Link } from 'react-router-dom';
import { StyledShowMoreBtn } from './styles/ShowMoreBtn.styled';

const ShowMoreBtn = ({text, to}) => {
  return (
    <StyledShowMoreBtn>
      <Link to={to}>{text}</Link>
    </StyledShowMoreBtn>
  );
};

export default ShowMoreBtn;
