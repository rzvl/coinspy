import { StyledNavbar, StyledNavLink, Logo, HamburgurMenu } from "./styles/Navbar.styled";
import { RiSpyFill, RiMenuLine, RiCloseFill } from 'react-icons/ri';
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
  <StyledNavbar>
    <Logo to={'/'}>
      <RiSpyFill size={28} color={'#9333ea'} />
      <span>Coin Spy</span>
    </Logo>
    <nav>
      <StyledNavLink to={'/'} >Home</StyledNavLink>
      <StyledNavLink to={'cryptocurrencies'} >Cryptocurrencies</StyledNavLink>
      <StyledNavLink to={'exchanges'} >Exchanges</StyledNavLink>
      <StyledNavLink to={'news'} >News</StyledNavLink>
      <HamburgurMenu onClick={handleClick}>
        {open ? <RiCloseFill size={28} color={'#9333ea'} /> : <RiMenuLine size={28} color={'#9333ea'} />}
      </HamburgurMenu>
      {open && <MobileMenu onClick={handleClick} />}
    </nav>
  </StyledNavbar>
  );
};

export default Navbar;
