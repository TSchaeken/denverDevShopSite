import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import unionStation from '../images/unionStation.jpg';
const env = process.env.NODE_ENV || 'development';

//Photo by Owen CL on Unsplash

const styles = {
  main: {
    background: `url(${unionStation}) no-repeat center center fixed`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: '100px'
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
        <CssBaseline />
        <div className={classes.main}>
          <Typography variant="headline" className={classes.title}> Denver Dev Shop </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
