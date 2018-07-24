import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {}
};

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: '',
    sent: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      sent: true
    });
  };

  render() {
    return (
      <div>
        {!this.state.sent ? (
          <form onSubmit={this.onSubmit}>
            <label htmlFor="firstName">Enter username</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={e => this.onChange(e)}
            />
            <label htmlFor="lastName">Enter username</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={e => this.onChange(e)}
            />
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.onChange(e)}
            />
            <input
              name="location"
              placeholder="Location"
              value={this.state.location}
              onChange={e => this.onChange(e)}
            />
            <input
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={e => this.onChange(e)}
            />
            <button>Touch me</button>
          </form>
        ) : (
          <Typography variant="display3">Thanks for your interest!</Typography>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Form);
