import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss/lib/injectSheet';

const styles = {
  jumbotron: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 48,
    height: 500,
    padding: '0 30px',
    textAlign: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function Jumbotron(props) {
  return (
    <div>
      <div className={props.classes.jumbotron}></div>
    </div>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Jumbotron);
