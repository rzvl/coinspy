import { MobileMenuLink, StyledMobileMenu } from './styles/MobileMenu.styled';

const MobileMenu = ({onClick}) => {
  return (
    <StyledMobileMenu>
      <MobileMenuLink to={'/'} onClick={onClick} >Home</MobileMenuLink>
      <MobileMenuLink to={'cryptocurrencies'} onClick={onClick} >Cryptocurrencies</MobileMenuLink>
      <MobileMenuLink to={'exchanges'} onClick={onClick} >Exchanges</MobileMenuLink>
      <MobileMenuLink to={'news'} onClick={onClick} >News</MobileMenuLink>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
