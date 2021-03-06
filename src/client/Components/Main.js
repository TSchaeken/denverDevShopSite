import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { HashLink as Link } from 'react-router-hash-link';
// import About from './Info';
// import UnionStation from '../images/unionStation.jpg';
// import Form from './Form';

//Photo by Owen CL on Unsplash

class HomePage extends Component {
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
    return (
      <div>
        {this.head()}
        <div>
          Focused on Being a Devshop
          This is body. The Body.
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default HomePage;
