import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { HashLink as Link } from 'react-router-hash-link';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import About from './Info';
// import UnionStation from '../images/unionStation.jpg';
// import Form from './Form';

// const env = process.env.NODE_ENV || 'development';

//Photo by Owen CL on Unsplash

// const styles = {
//   root: {
//     flexGrow: 1,
//     width: '100%',
//   },
// };

class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     infoStyle1: 'titleInfoHidden',
  //     infoStyle2: 'titleInfoHidden',
  //     infoStyle3: 'titleInfoHidden',
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     infoStyle1: 'titleInfo1',
  //     infoStyle2: 'titleInfo2',
  //     infoStyle3: 'titleInfo3',
  //   });
  // }

  head = () => (
    <Helmet>
      <meta charSet='utf-8' />
      <title>Denver Dev Shop</title>
      <meta property='og:title' content='Custom Software Development' />
      <meta property='og:description' content='Custom Software Development' />
      <meta property='og:image' content='' />
      <meta property='og:type' content='article' />
      <link rel='canonical' href='http://www.denverdevshop.com' />
    </Helmet>
  );

  render() {
    // const { classes } = this.props;
    // const { infoStyle1, infoStyle2, infoStyle3 } = this.state;

    return (
      <div>
        {this.head()}
        <div>
          <div>
            Focused on Being a Devshop
          </div>
          {/* <div className={classes.main} id='home'>
            <Typography variant='display4' className={classes.title}>
              Denver Dev Shop
            </Typography>
            <div>
              <Typography variant='display3' className={classes[infoStyle1]}>
                Design
              </Typography>
              <Typography variant='display3' className={classes[infoStyle2]}>
                Develop
              </Typography>
              <Typography variant='display3' className={classes[infoStyle3]}>
                Deliver
              </Typography>
            </div>
          </div>
          <div id='about'>
            <About />
          </div>
          <div id='contact'>
            <Form />
          </div> */}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default HomePage;
