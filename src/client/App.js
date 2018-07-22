import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
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
        <Route exact path="/" component={Main} />
      </div>
    );
  }
}

export default App;
