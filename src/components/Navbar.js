import AppBar from '@mui/material/AppBar';
import { Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.light' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="coinGate" style={{ width: 120 }} />
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            color="secondary"
            mx={4}
          >
            Products
          </Typography>
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            color="secondary"
            mx={4}
          >
            Resources
          </Typography>
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            color="secondary"
            mx={4}
          >
            Buy Instantly
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            color="secondary"
            mx={4}
          >
            Login
          </Typography>
          <Button
            variant="contained"
            href="https://coingate.com/"
            sx={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
              textTransform: 'none',
              backgroundColor: '#16DFB5',
              color: 'white',
              display: { sm: 'block', xs: 'none' },
            }}
          >
            Sign up &#62;
          </Button>
          <IconButton
            size="large"
            edge="end"
            aria-label="open drawer"
            color="secondary"
            sx={{ display: { xs: 'block', sm: 'none' }, flexGrow: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
