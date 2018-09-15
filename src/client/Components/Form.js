import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '800px',
  },
  textField: {
    width: '300px',
    margin: '20px 40px',
    paddingRight: '40px',
    paddingTop: '20px',
  },
  Message: {
    width: '100%',
  },
};

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: '',
    sent: false,
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      sent: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { email, firstName, lastName, location, message, sent } = this.state;

    return (
      <div className={classes.container}>
        {!sent ? (
          <form>
            <TextField
              id='firstName'
              label='First Name'
              name='firstName'
              className={classes.textField}
              value={firstName}
              onChange={e => this.onChange(e)}
            />
            <TextField
              id='lastName'
              label='Last Name'
              name='lastName'
              className={classes.textField}
              value={lastName}
              onChange={e => this.onChange(e)}
            />
            <br />
            <TextField
              name='email'
              label='Email Address'
              className={classes.textField}
              value={email}
              onChange={e => this.onChange(e)}
            />
            <TextField
              name='location'
              label='Location'
              className={classes.textField}
              value={location}
              onChange={e => this.onChange(e)}
            />
            <br />
            <TextField
              name='message'
              label='Message'
              multiline
              rows='6'
              className={`${classes.textField} ${classes.Message}`}
              value={message}
              onChange={e => this.onChange(e)}

            />
            <br />
            <Button onClick={this.onSubmit}>Submit</Button>
          </form>
        ) : (
          <Typography variant='display3'>Thanks for your interest, we'll get back to you soon.</Typography>
        )}
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
