import { useParams } from "react-router-dom";
import { Container } from "../styles/Container.styled";

const CryptoDetails = () => {
  const {coinId} = useParams();

  return (
    <Container>
      <span>This is crypto details page {coinId}</span>
    </Container>
  );
};

export default CryptoDetails;
