import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'
import SideBar from './components/sideBar/SideBar.jsx';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { LanguageProvider } from './components/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Tooltip } from '@mui/material';
import i18n from './components/i18n.jsx'
function App() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAndTranslate = () => {
    setAnchorEl(null);
    toggleLanguage()
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };
  return (
    <><LanguageProvider>
      <Tooltip title='Translation of the page'>
        <GTranslateIcon className='gTranslateIcon'
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          style={
            {
              cursor: 'pointer',
            }
          }
        >
          <AccountCircle />
        </GTranslateIcon></Tooltip>
      <Menu
        id="menu-appbar"
        // anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleCloseAndTranslate} >{t('translation')}</MenuItem>
      </Menu>
      <div id='root'>
        <div id='sideBar'>
          <SideBar /></div>
        <div className='outlet'>
          <Outlet /></div></div></LanguageProvider>
    </>
  );
}

export default App
