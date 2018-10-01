import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import styles from './styles/main.scss';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.setScrollY);
  }

  state = {
    scrollY: 0,
  };

  setScrollY = () => {
    this.setState(() => ({
      scrollY: window.scrollY,
    }));
  }

  render() {
    const { scrollY } = this.state;
    return (
      <div className={styles.root}>
        <NavBar scrolled={scrollY >= 64} />
        <Route exact path='/' component={Main} />
      </div>
    );
  }
}

export default App;
