import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faDatabase);

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
        <CssBaseline />
        <NavBar />
        <Route exact path="/" component={Main} />
      </div>
    );
  }
}

export default App;
