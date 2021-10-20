import {
  TextField,
  Typography,
  Button,
  Card,
  FormLabel,
  Box,
  MenuItem,
  FormControl,
  Select,
  Avatar,
} from '@mui/material';
import { useState, useEffect } from 'react';
import api from '../assets/apicoin.json';
import currencyIcon from '../assets/icon.png';

export default function FormConv({ currencyArr, paymentMethodsArr }) {
  const [payCurrency, setPayCurrency] = useState('EUR');
  const [payAmount, setPayAmount] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [buyCurrency, setBuyCurrency] = useState('BTC');
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodsArr[0].name);

  const calculateBuyAmount = () => {
    let rate = api.merchant[buyCurrency][payCurrency];
    setBuyAmount(payAmount / rate);
  };

  useEffect(() => {
    calculateBuyAmount();
  }, [payAmount, payCurrency, buyAmount, buyCurrency]);

  return (
    <Card variant="outlined" sx={{ maxWidth: 345, p: 3, borderRadius: 5, display: 'block', m: 'auto' }}>
      <Box
        fullWidth
        sx={{
          border: '1px solid grey',
          height: 40,
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
          mt: 8,
        }}
      >
        <FormLabel sx={{ px: 2 }}>Pay</FormLabel>
        <TextField
          id="outlined-basic"
          variant="standard"
          type="number"
          value={payAmount}
          onChange={(e) => setPayAmount(e.target.value)}
          sx={{ width: 100, borderRight: '1px solid grey' }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <FormControl>
          <Select
            value={payCurrency}
            onChange={(e) => setPayCurrency(e.target.value)}
            sx={{ height: 40, width: 120 }}
            variant="standard"
            disableUnderline
          >
            {currencyArr &&
              currencyArr.map((item, index) => (
                <MenuItem key={index} value={item.name} sx={{ fontSize: 10 }}>
                  <Avatar sx={{ width: 20, height: 20, display: 'inline', ml: 2, background: 'none' }}>
                    <img
                      src={item.icon}
                      alt="icon"
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = currencyIcon;
                      }}
                      style={{
                        width: 20,
                        height: 'auto',
                        objectFit: 'cover',
                        zIndex: 1,
                        verticalAlign: 'middle',
                        display: 'inline',
                      }}
                    />
                  </Avatar>
                  <Typography component="span" sx={{ ml: 2 }}>
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        fullWidth
        sx={{
          border: '1px solid grey',
          height: 40,
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <FormLabel sx={{ px: 2 }}>Buy</FormLabel>
        <TextField
          id="outlined-basic"
          variant="standard"
          type="number"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          sx={{ width: 100, borderRight: '1px solid grey' }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <FormControl>
          <Select
            value={buyCurrency}
            onChange={(e) => setBuyCurrency(e.target.value)}
            sx={{ height: 40, width: 120 }}
            variant="standard"
            disableUnderline
          >
            {currencyArr &&
              currencyArr.map((item, index) => (
                <MenuItem key={index} value={item.name} sx={{ fontSize: 10 }}>
                  <Avatar sx={{ width: 20, height: 20, display: 'inline', ml: 2, background: 'none' }}>
                    <img
                      src={item.icon}
                      alt="icon"
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = currencyIcon;
                      }}
                      style={{
                        width: 20,
                        height: 'auto',
                        objectFit: 'cover',
                        zIndex: 1,
                        verticalAlign: 'middle',
                        display: 'inline',
                      }}
                    />
                  </Avatar>
                  <Typography component="span" sx={{ ml: 2 }}>
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Typography variant="body1">Payment method</Typography>
      <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
        <Select
          variant="standard"
          disableUnderline
          fullWidth
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          sx={{
            border: '1px solid grey',
            height: 40,
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
          }}
        >
          {paymentMethodsArr &&
            paymentMethodsArr.map((item, index) => (
              <MenuItem key={index} value={item.name} sx={{ fontSize: 10 }}>
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    display: 'inline',
                    ml: 2,
                    background: 'none',
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.src = currencyIcon;
                    }}
                    style={{
                      width: 20,
                      height: 'auto',
                      objectFit: 'cover',
                      zIndex: 1,
                      verticalAlign: 'middle',
                      display: 'inline',
                    }}
                  />
                </Avatar>
                <Typography component="span" sx={{ ml: 2 }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <div>
        <Button
          size="large"
          variant="contained"
          href="https://coingate.com/"
          fullWidth
          sx={{ mt: 8 }}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            textTransform: 'none',
            backgroundColor: '#16DFB5',
            color: 'white',
          }}
        >
          Buy {buyCurrency}
        </Button>
      </div>
    </Card>
  );
}
