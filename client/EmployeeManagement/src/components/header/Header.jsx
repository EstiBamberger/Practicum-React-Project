/* eslint-disable no-unused-vars */
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types'; // Import PropTypes
import logo from '../../assets/2.jpg'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems:'center',
  backgroundColor:'white'
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'your_color_here', 
  height: 100, 
}));
const StyledLogo = styled('img')(({ theme }) => ({
  height:'110px',
  maxWidth: '160px',
  borderRadius: '5px',
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#3e3e3e', 
}));
const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <StyledToolbar>
        <StyledLogo src={logo} alt="logo"  />
          <StyledTypography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            Employee Management
          </StyledTypography>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>

        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {
  onInputChange: PropTypes.func.isRequired, // Define PropTypes for onInputChange prop
};

export default Header;
