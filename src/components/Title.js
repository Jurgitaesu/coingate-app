import Typography from '@mui/material/Typography';

export default function Title() {
  return (
    <div>
      <Typography variant="h4" component="div" color="primary.light" sx={{ fontWeight: 600 }}>
        <Typography variant="h4" component="span" color="primary.contrastText" sx={{ fontWeight: 600 }}>
          Buy Bitcoin,
        </Typography>{' '}
        Ethereum, Litecoin and other crypto{' '}
        <Typography variant="h4" component="span" color="primary.contrastText" sx={{ fontWeight: 600 }}>
          online
        </Typography>
      </Typography>
    </div>
  );
}
