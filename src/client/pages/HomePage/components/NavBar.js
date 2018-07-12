import React from 'react';
import PropTypes from 'prop-types';
import {HashLink as Link} from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  MenuList,
  MenuItem
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Denver Dev Shop
          </Typography>
        </Toolbar>
        <MenuList>
          <MenuItem smooth component={Link} to="/#home">Home</MenuItem>
          <MenuItem smooth component={Link} to="/#about">About</MenuItem>
          <MenuItem smooth component={Link} to="/#contact">Contact Us</MenuItem>
        </MenuList>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
