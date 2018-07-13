import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';

class App extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
