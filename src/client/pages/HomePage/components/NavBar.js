import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  }
};

class NavBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Denver Dev Shop
            </Typography>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem
                smooth
                component={Link}
                to="/#home"
                onClick={this.handleClose}
              >
                Home
              </MenuItem>
              <MenuItem
                smooth
                component={Link}
                to="/#about"
                onClick={this.handleClose}
              >
                About
              </MenuItem>
              <MenuItem
                smooth
                component={Link}
                to="/#contact"
                onClick={this.handleClose}
              >
                Contact Us
              </MenuItem>
            </Menu>
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
