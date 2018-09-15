import React, { Component } from 'react';

class Info extends Component {
  handleClick(name) {
    this.setState({
      // active: name,
    });
  }

  render() {
    return (
      <div>
        Info Component
      </div>
    );
  }
}

Info.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Info;
