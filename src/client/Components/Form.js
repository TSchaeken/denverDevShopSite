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
        <input placeholder="First name" value={this.state.firstName} />
      </form>
    );
  }
}

export default withStyles(styles)(Form);
