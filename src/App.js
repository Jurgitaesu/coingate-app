import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Form from './components/Form';
import api from './assets/apicoin.json';
import sepaIcon from './assets/sepa-icon.png';
import cardIcon from './assets/card-icon.png';
import mobileIcon from './assets/mobile-icon.png';
import Title from './components/Title';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#5022ED',
      dark: '#010101',
      contrastText: '#16DFB5',
    },
    secondary: {
      main: '#BCC0CD',
    },
  },
});

function App() {
  const [currencyArr, setCurrencyArr] = useState([]);
  const paymentMethodsArr = [
    {
      name: 'Bank transfer',
      icon: sepaIcon,
    },
    {
      name: 'Credit / Debit card',
      icon: cardIcon,
    },
    { name: 'Mobile balance', icon: mobileIcon },
  ];
  useEffect(() => {
    loadCurrencies();
  }, []);

  const loadCurrencies = async () => {
    let allCurrencies = Object.keys(api.merchant);
    let currenciesArr = [];
    allCurrencies.map((item) => {
      currenciesArr.push({
        name: item,
        icon: `https://cryptoicons.org/api/icon/${item.toLowerCase()}/100`,
      });
      return currenciesArr;
    });
    setCurrencyArr(currenciesArr);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />{' '}
      <Grid
        container
        spacing={1}
        pt={5}
        px={2}
        pb={20}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5022ED',
          height: '100%',
        }}
      >
        <Grid item xs={12} md={4} pr={4}>
          <Title />
          <Description />
        </Grid>
        <Grid item xs={12} md={4}>
          <Form currencyArr={currencyArr} paymentMethodsArr={paymentMethodsArr} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
