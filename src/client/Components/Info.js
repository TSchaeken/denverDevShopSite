import React, { Component } from 'react';
import { Grid, Paper, Typography, withStyles, Button } from '@material-ui/core';

const styles = {
  aboutInfo: {
    height: '400px'
  },
  buttons: {
    marginTop: '40px'
  },
  text: {
    height: '800px'
  }
};

class Info extends Component {
  state = {
    active: 'who',
    who: 'We are a group of people.',
    what: 'We make stuff.',
    why: 'Because we love this shit.'
  };

  handleClick(name) {
    this.setState({
      active: name
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify={'center'} direction={'row'} alignItems={'center'} className={classes.buttons}>
        <Grid item>
            <Button name="who" className={classes.buttons} onClick={() => this.handleClick('who')}>
              Who
            </Button>
          </Grid>
          <Grid item>
            <Button
              name="what"
              className={classes.buttons}
              onClick={() => this.handleClick('what')}
            >
              What
            </Button>
          </Grid>
          <Grid item>
            <Button name="why" className={classes.buttons} onClick={() => this.handleClick('why')}>
              Why
            </Button>
          </Grid>
        </Grid>
        <Grid container justify={'center'} alignItems={'center'} className={classes.text}>
          {this.state[this.state.active]}
          <Grid />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Info);
