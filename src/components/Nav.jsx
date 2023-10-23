import React, {useContext, useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {MenuItem} from '@mui/material';

import '../components/css/navegador.css';

import NightModeToggle from "./NightModeToggle.tsx";

const drawerWidth = 240;
const navItems = ['Inicio', 'Servicios', 'Productos', 'Informacion'];

function Nav(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  const handleCloseNavMenu = (event) => {
    let selectedOption = event.target.innerHTML;
    if (selectedOption.length > 15) {
        let textLenght = selectedOption.indexOf('<');
        selectedOption = selectedOption.substring(0, textLenght);
    }

    switch (selectedOption) {
        case 'Inicio':
            navigate("/");
            break;
        case 'Servicios':
            navigate("/resinaFilamento");
            break;
        case 'Productos':
            navigate("/productos");
            break;
        case 'Informacion':
          navigate("/informacion");
          break;
        default:
            console.log("Error");
            break;
    }
  };




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Commander 3D
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <MenuItem onClick={handleCloseNavMenu} key={item}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1,fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
          >
            Commander 3D
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={handleCloseNavMenu} key={item} sx={{ color: '#fff', fontWeight: 'bold', fontSize:'1.5rem'}}>
                {item}
              </Button>
            ))}
          </Box>
          <NightModeToggle />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ 
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default Nav;
