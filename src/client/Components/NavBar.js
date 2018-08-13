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
  navtop: {
    width: '100%',
    top: 0,
    backgroundColor: 'yellow'
  },
  navshow: {
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
    top: true,
    goingUp: false
  };

  componentDidMount = () => {
    this.scollNavUpdate();
  };

  scollNavUpdate() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        this.setState({top: false})
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          this.setState({ goingUp: false });
          console.log('going down');
        } else {
          this.setState({ goingUp: true });
          console.log('going up');
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }
      else {
        this.setState({top:true, goingUp:false})
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={
            this.state.top
              ? `${classes.navtop}`
              : `${this.state.goingUp ? classes.navshow : classes.navhidden}`
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
        <div ref="scan" width={300} height={1} />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
