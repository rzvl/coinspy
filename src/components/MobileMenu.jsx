import { MobileMenuLink, StyledMobileMenu } from './styles/MobileMenu.styled';

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <MobileMenuLink to={'/'} >Home</MobileMenuLink>
      <MobileMenuLink to={'cryptocurrencies'} >Cryptocurrencies</MobileMenuLink>
      <MobileMenuLink to={'exchanges'} >Exchanges</MobileMenuLink>
      <MobileMenuLink to={'news'} >News</MobileMenuLink>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
