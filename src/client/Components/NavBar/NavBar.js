import React from 'react';
// import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.scss';

const NavBar = () => (
  <div className={styles.root}>
    <div className={styles.logo}>Denver Devshop</div>
    <div className={styles.buttonsWrapper}>
      <div>
        Our Work
      </div>
      <div>
        What We Do
      </div>
      <div>
        Who We Are
      </div>
    </div>
  </div>
);

NavBar.propTypes = {
  // classes: PropTypes.object.isRequired,
};


export default NavBar;
