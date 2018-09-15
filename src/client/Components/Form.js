import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    // firstName: '',
    // lastName: '',
    // email: '',
    // location: '',
    // message: '',
    // sent: false,
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      // sent: true,
    });
  };

  render() {
    return (
      <div>
        Form Component
      </div>
    );
  }
}

Form.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Form;
