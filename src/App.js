import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link
} from 'react-router-dom';

// Header and Footer Components
import Footer from './components/Footer.jsx';
import FixedMenu from './components/FixedMenu.jsx';

// Routes
import HomePage from './components/home/HomePage.jsx';
import CoachList from './components/coachlist/CoachList.jsx';
import AboutPage from './components/about/AboutPage.jsx';


import './App.css';

class App extends Component {
 constructor() {
    super()
    this.state = {}
 }

  render() {
    return (
    <Router>
      <div>
        <FixedMenu />
          <Switch> 

            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/coachlist' component={CoachList} />

          </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App;
