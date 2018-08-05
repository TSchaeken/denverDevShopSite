import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  nav: {
    width: '100%',
    top: 0,
    transition: 'top 0.3s'
  },
  navhidden: {
    width: '100%',
    top: '-100px',
    transition: 'top 0.5s'
  }
};

class NavBar extends Component {
  state = {
    goingUp: true
  };

  componentDidMount = () => {
    let lastScrollTop = 50;
    window.addEventListener(
      'scroll',
      function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          this.setState({ goingUp: true });
        } else {
          this.setState({ goingUp: false });
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }.bind(this)
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={
            this.state.goingUp ? `${classes.navhidden}` : `${classes.nav}`
          }
        >
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
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
