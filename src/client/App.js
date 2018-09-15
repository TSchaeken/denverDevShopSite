import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import NavBar from './Components/NavBar';

import styles from './styles/main.scss';

class App extends Component {
  componentDidMount() {
    // const jssStyles = document.getElementById('jss-server-side');
    // if (jssStyles && jssStyles.parentNode) {
    //   jssStyles.parentNode.removeChild(jssStyles);
    // }
  }

  render() {
    return (
      <div className={styles.root}>
        <NavBar />
        <Route exact path='/' component={Main} />
      </div>
    );
  }
}

export default App;
