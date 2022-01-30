import styled from 'styled-components';
import { Container } from '../styles/Container.styled';

const Exchanges = () => {
  return (
    <Container>
      <ComingSoon>
       <h1>Coming Soon...</h1>
      </ComingSoon>
    </Container>
  );
};

export default Exchanges;

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  h1 {
    margin: 0;
    padding: 0;
  }
`;