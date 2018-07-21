import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Denver Dev Shop
            </Typography>
            <Button smooth component={Link} color="inherit" to="/#home">
              Home
            </Button>
            <Button smooth component={Link} color="inherit" to="/#about">
              About
            </Button>
            <Button smooth component={Link} color="inherit" to="/#contact">
              Contact Us
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
