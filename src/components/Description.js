import { Typography, Button } from '@mui/material';

export default function Description() {
  return (
    <div>
      <Typography variant="body1" paragraph component="p" color="primary.light" pt={4}>
        Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA
        bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
        Ethereum or any other popular crypto directory to your personal wallet without making any initial
        deposits. It's as easy as it gets!
      </Typography>
      <Button
        href="https://coingate.com/"
        sx={{ color: 'primary.contrastText', textTransform: 'none', padding: 0 }}
      >
        Start now &#62;
      </Button>
    </div>
  );
}
