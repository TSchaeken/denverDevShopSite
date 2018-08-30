import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#eeeeee',
  },
  titleInfo1: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.25s'
  },
  titleInfo2: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.35s'
  },
  titleInfo3: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.45s'
  },
  titleInfoHidden: {
    color: 'transparent',
    position: 'relative',
    left: '100px'
  },
  flairText: {
    marginLeft: '20px',
    borderLeft: '1px solid white'
  },
  mainText: {
    textAlign: 'right',
  }
};

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoStyle1: 'titleInfoHidden',
      infoStyle2: 'titleInfoHidden',
      infoStyle3: 'titleInfoHidden'
    };
  }

  componentDidMount() {
    this.setState({
      infoStyle1: 'titleInfo1',
      infoStyle2: 'titleInfo2',
      infoStyle3: 'titleInfo3'
    });
  }

  render() {
    const { classes } = this.props;
    const { infoStyle1, infoStyle2, infoStyle3 } = this.state;
    return (
      <div className={classes.main} id="home">
        <div className={classes.mainText}>
          <Typography variant="display4" className={classes.title}>
            Denver Dev Shop
          </Typography>
          <Typography variant="display2" className={classes.title}>Cooperative Software Development</Typography>
        </div>
        <div className={classes.flairText}>
          <Typography variant="display3" className={classes[infoStyle1]}>
            Design
          </Typography>
          <Typography variant="display3" className={classes[infoStyle2]}>
            Develop
          </Typography>
          <Typography variant="display3" className={classes[infoStyle3]}>
            Deliver
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Title);
