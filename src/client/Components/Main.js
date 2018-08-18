import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Title from './Title';
import About from './Info';
import UnionStation from '../images/unionStation.jpg';
import Form from './Form';
const env = process.env.NODE_ENV || 'development';

//Photo by Owen CL on Unsplash

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
  title: {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${UnionStation}) no-repeat center center`,
    height: '85vh',
    width: '100%',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  about: {
    width: '100%',
    padding: '20px',
    backgroundImage: 'hsl(210, 9%, 96%)'
  },
  contact: {
    height: '400px'
  }
};

class HomePage extends Component {

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
          <div id="home" className={classes.title}>
            <Title />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
