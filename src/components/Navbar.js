import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  menuButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinks = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      title: 'Info',
      icon: <InfoIcon />,
      path: '/info',
    },
  ];

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.title} component="a" href={link.path}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{fontFamily: 'consolas'}}>
            IT CALCULATOR
          </Typography>
          <div className={classes.menuButtons}>
            <Button color="inherit" component="a" href="/" style={{fontFamily: 'consolas', fontSize: 18}}>
              Home
            </Button>
            <Button color="inherit" component="a" href="/info" style={{fontFamily: 'consolas', fontSize: 18}}>
              Info
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleDrawerClose}>
        {sideList()}
      </Drawer>
    </div>
  );
};

export default Navbar;
