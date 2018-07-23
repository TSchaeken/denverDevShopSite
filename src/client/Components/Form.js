import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

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
    sent: 0
  };

  render() {
    return (
      <form>
        <input placeholder="First name" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value})}/>
        <input placeholder="Last name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value})}/>
        <input placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value})}/>
        <input placeholder="Location" value={this.state.location} onChange={e => this.setState({ location: e.target.value})}/>
        <input placeholder="Message" value={this.state.message} onChange={e => this.setState({ message: e.target.value})}/>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
