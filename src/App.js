import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link
} from 'react-router-dom';

import Footer from './components/Footer.jsx';
import FixedMenu from './components/FixedMenu.jsx';

import HomePage from './components/home/HomePage.jsx';

import './App.css';

class App extends Component {
 constructor() {
    super()
    this.state = {}
 }

  render() {
    return (
    <div>
      <FixedMenu />

      <Router>
        <Switch> 
          <Route exact path='/' component={HomePage} />

        </Switch>
      </Router>
      
      <Footer />
    </div>
    )
  }
}

export default App;
