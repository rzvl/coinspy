import { StyledFooter, FooterLinks, FooterLink } from "./styles/Footer.styled";


const Footer = () => {
  return (
    <StyledFooter>
      <p>CoinSpy &copy; 2022</p>
      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="cryptocurrencies">Cryptocurrencies</FooterLink>
        <FooterLink to="exchanges">Exchanges</FooterLink>
        <FooterLink to="news">News</FooterLink>
      </FooterLinks>
    </StyledFooter>
  );
};

export default Footer;
