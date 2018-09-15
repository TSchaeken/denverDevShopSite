import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Divider,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';

const styles = {
  aboutInfo: {
    height: '400px',
  },
  buttons: {
    marginTop: '40px',
  },
  textbox: {
    height: '400px',
    width: '100%',
  },
  text: {
    whiteSpace: 'pre-line',
    width: '60%',
  },
  guide: {
    height: '20vh',
    fontSize: '100px',
    width: '100%',
  },
};

class Info extends Component {
  state = {
    active: 'who',
    who:
    /* eslint-disable-next-line */
      "I'll do it missen Off f'r a sup down t'pub, to'neet. Now then, as it 'appens it's o'er yonder! If in doubt-do nowt! If in doubt-do nowt! If in doubt-do nowt! Off f'r a sup down t'pub, to'neet. I'm off down't road, I'm flaggin'. Are'y reet? Dafteth Apeth. Yer flummoxed. Ee bye ecky thump! Were ya born in a barn, lad? Are'y reet? Dafteth Apeth. Now then, as it 'appens it's o'er yonder! If in doubt-do nowt! Wash tha' mouth out, tha's goin' doolally. He's a wrong'un like, I'm off down't road, I'm flaggin'. Oh aye! Owt goin' on today lad, bes' be goin' yam. If in doubt-do nowt! Aye, 'is as daft as a brush, lad! 'am as 'appy as a pig in muck, like. Put it on t'table Fair t' middlin, this is. How do? Eeh by gum, Are'y reet? Dafteth Apeth. I'll do it missen By eckers, well, I'll go to't foot of't stairs! I'll do it missen Theers nowt s'queer as folk. \n\n Now then, as it 'appens it's o'er yonder! Fair t' middlin, this is. If in doubt-do nowt! Wash tha' mouth out, tha's goin' doolally. Were ya born in a barn, lad? I'll do it missen Ee bye ecky thump! Were ya born in a barn, lad? Tha's getten tha'self in a pickle there lass. Just nipping t' lavvy. Off f'r a sup down t'pub, to'neet. I've got nowt to do today, I need summat to do. Oh aye! Now then, as it 'appens it's o'er yonder! 'am as 'appy as a pig in muck, like. If in doubt-do nowt! Theers nowt s'queer as folk. Yer flummoxed. Off f'r a sup down t'pub, to'neet. I'll do it missen Do I 'eckers like, Wash tha' mouth out, tha's goin' doolally. Yer flummoxed. Fair t' middlin, this is. By eckers, well, I'll go to't foot of't stairs! You're in luck m'boy! Fair t' middlin, this is. Now then, do as thy says, not as thy does. Put it on t'table Aye up lass. Wash tha' mouth out, tha's goin' doolally. \n\n Yer flummoxed. How do? Eeh by gum, Oh aye! Owt goin' on today lad, bes' be goin' yam. Were ya born in a barn, lad? Aye up lass. You're in luck m'boy! Just nipping t' lavvy. Yer couldn't organise a set of fat bobbies. Aye up, she's a reight bobby dazzler. Yer flummoxed.",
    what: 'We make stuff.',
    why: 'Because we love this shit.',
  };

  handleClick(name) {
    this.setState({
      active: name,
    });
  }

  render() {
    const { classes } = this.props;
    const { active } = this.state;
    return (
      <div>
        <Grid
          container
          justify='center'
          direction='row'
          alignItems='center'
          className={classes.guide}
        >
          <Grid item>
            <Typography variant='display2'>What makes us different</Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          justify='center'
          direction='row'
          alignItems='center'
          className={classes.buttons}
        >
          <Grid item>
            <Button
              name='who'
              className={classes.buttons}
              onClick={() => this.handleClick('who')}
            >
              Who
            </Button>
          </Grid>
          <Grid item>
            <Button
              name='what'
              className={classes.buttons}
              onClick={() => this.handleClick('what')}
            >
              What
            </Button>
          </Grid>
          <Grid item>
            <Button
              name='why'
              className={classes.buttons}
              onClick={() => this.handleClick('why')}
            >
              Why
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.textbox}
        >
          <Grid item className={classes.text}>
            {/* eslint-disable-next-line */}
            {this.state[active]}
          </Grid>
          <Grid />
        </Grid>
      </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);
