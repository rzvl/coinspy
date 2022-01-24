import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Navbar } from './components';
import {
  Home,
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  News,
} from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="news" element={<News />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
