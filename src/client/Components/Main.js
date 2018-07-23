import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UnionStation from '../images/unionStation.jpg';
import Form from './Form';
const env = process.env.NODE_ENV || 'development';

//Photo by Owen CL on Unsplash

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
  main: {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${UnionStation}) no-repeat center center`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover'
  },
  title: {
    color: '#eeeeee',
    marginLeft: '25px'
  },
  about: {
    width: '100%',
    margin: '10px 0'
  },
  aboutInfo: {
    height: '400px',
    margin: 'auto 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    margin: '10px 0'
  }
};

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  head() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Denver Dev Shop</title>
        <meta property="og:title" content="Custom Software Development" />
        <meta property="og:description" content="Custom Software Development" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="http://www.denverdevshop.com" />
      </Helmet>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.head()}
        <div className={classes.root}>
          <div className={classes.main} id="home">
            <Typography variant="display4" className={classes.title}>
              Denver Dev Shop
            </Typography>
            <Typography variant="display3" className={classes.title}>
              Design
            </Typography>
            <Typography variant="display3" className={classes.title}>
              Develop
            </Typography>
            <Typography variant="display3" className={classes.title}>
              Deliver
            </Typography>
          </div>
          <Grid container className={classes.about} id="about">
            <Grid item xs>
              <Paper className={classes.aboutInfo} elevation={12}>
                <Typography variant="display3">Who</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.aboutInfo} elevation={12}>
                <Typography variant="display3">What</Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.aboutInfo} elevation={12}>
                <Typography variant="display3">Why</Typography>
              </Paper>
            </Grid>
          </Grid>
          <div id="contact">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
