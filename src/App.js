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
import LoggedOutHomePage from './components/home/LoggedOutHomePage.jsx';
import CoachList from './components/coachlist/CoachList.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import LoginPage from './components/loginpage/LoginPage.jsx';
import CoachSignup from './components/signup/CoachSignup.jsx';
import PlayerSignup from './components/signup/PlayerSignup.jsx';
import VideoChat from './components/video/VideoChat.jsx';

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

            <Route exact path='/home' component={VideoChat} />
            <Route path='/about' component={AboutPage} />
            <Route path='/coachlist' component={CoachList} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup/coach' component={CoachSignup} />
            <Route path='/signup/player' component={PlayerSignup} />

          </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App;
