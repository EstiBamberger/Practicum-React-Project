import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import './LogIn.css'
import AdminStore from '../../stores/AdminStore';
import Swal from 'sweetalert2'
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

const defaultTheme = createTheme();

export default function LogIn() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    setTimeout(async () => {
      setLoading(false);
      const data = new FormData(form); // Use form instead of event.currentTarget
      const res = await AdminStore.handleLogin(data.get('name'), data.get('password'));
      console.log(res)
      if (res == true) {
        window.location.href = './';
      }
      else {
        Swal.fire({
          text: 'One or more details are incorrect, please try again',
          customClass: {
            confirmButton: 'custom-ok-button',
          },
        });
      }
    }, 2000);
  };


  return (
    <div id='div'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#19b394' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t('titleSignIn')}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label={t('name')}
                name="name"
                autoComplete="name"

                sx={{
                  '&:focus': {
                    outline: 'none',
                    border: '1px solid #19b394', // Apply custom border color, 
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('password')}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Tooltip title='Sign In'>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: '#19b394',
                    '&:hover': {
                      bgcolor: '#15a084',
                    },
                    '&:active': {
                      bgcolor: '#15a084',
                    },
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Sign In'
                  )}
                </Button></Tooltip>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
