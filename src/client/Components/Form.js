import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '800px',
//   },
//   textField: {
//     width: '300px',
//     margin: '20px 40px',
//     paddingRight: '40px',
//     paddingTop: '20px',
//   },
//   Message: {
//     width: '100%',
//   },
// };

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
    // const { classes } = this.props;
    // const { email, firstName, lastName, location, message, sent } = this.state;

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
