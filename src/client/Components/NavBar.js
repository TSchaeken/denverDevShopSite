import React from 'react';
// import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';

const styles = {
  navBar: {
    width: '100%',
    backgroundColor: 'green',
    height: '64px',
  },
};

const NavBar = () => (
  <div style={styles.navBar}>
    <div>Nav Bar</div>
  </div>
);

NavBar.propTypes = {
  // classes: PropTypes.object.isRequired,
};


export default NavBar;
