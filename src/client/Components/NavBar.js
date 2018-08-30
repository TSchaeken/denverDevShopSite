import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  navtop: {
    position: 'absolute',
    boxShadow: 'none',
    width: '100%',
    top: 0,
    backgroundColor: 'transparent',
    color:'white',
    transition: 'background-color 0.5s, color 0.5s'
  },
  navshow: {
    position: 'fixed',
    width: '100%',
    top: 0,
    transition: 'top 0.3s',
    backgroundColor: 'white',
    color: '#111d2e'
  },
  navhidden: {
    width: '100%',
    top: '-100px',
    transition: 'top 0.5s',
    backgroundColor: 'white',
    color: '#111d2e'
  },
  invisible: {
    width: '100%',
    top: '-100px',
    backgroundColor: 'transparent',
    color: 'transparent'
  }
};

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      top: true,
      detached: false,
      goingUp: false,
      pos: 0
    };

    this.topDetect = _.throttle(this.topDetect.bind(this), 50);
    this.scrollDirection = _.throttle(this.scrollDirection.bind(this), 50, { leading: true });
  }

  componentDidMount() {
    console.log('MOUNTED');
    window.addEventListener('scroll', this.topDetect);
    window.addEventListener('scroll', this.scrollDirection);
  }

  componentWillUnmount() {
    console.log('UNMOUNTED');
    window.removeEventListener('scroll', this.topDetect);
    window.removeEventListener('scroll', this.scrollDirection);
  }

  topDetect() {
    let x = window.pageYOffset || document.documentElement.scrollTop;
    console.log(x);
    switch (true) {
      case x == 0: {
        this.setState({
          top: true,
          detached: false,
          goingUp: false,
          pos: 0
        });
        break;
      }
      case 0 < x && x <= 400 && this.state.detached === false: {
        this.setState({
          top: true,
          detached: false
        });
        break;
      }
      case 400 < x && x <= 650 && this.state.detached === false: {
        this.setState({
          top: false,
          detached: false
        });
        break;
      }
      case x > 650: {
        this.setState({
          top: false,
          detached: true
        });
        break;
      }
      default: {
        this.setState({
          ...this.state
        });
      }
    }
  }

  scrollDirection() {
    let lastScrollTop = this.state.pos;
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      this.setState({ goingUp: true });
    } else {
      this.setState({ goingUp: false });
    }
    lastScrollTop = st <= 0 ? 0 : st;
    this.setState({
      pos: lastScrollTop
    });
  }

  render() {
    const { classes } = this.props;
    const { top, goingUp, detached } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          className={
            top
              ? classes.navtop
              : goingUp && detached
                ? classes.navshow
                : detached
                  ? classes.navhidden
                  : classes.invisible
          }
        >
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
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
