import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route, 
} from 'react-router-dom';

// Header and Footer Components
import Footer from './components/Footer.jsx';
import FixedMenu from './components/FixedMenu.jsx';
import LoggedInMenu from './components/LoggedInMenu.jsx';

// Routes
import LoggedOutHomePage from './components/home/LoggedOutHomePage.jsx';
import CoachList from './components/coachlist/CoachList.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import LoginPage from './components/loginpage/LoginPage.jsx';
import CoachSignup from './components/signup/CoachSignup.jsx';
import PlayerSignup from './components/signup/PlayerSignup.jsx';
import VideoChat from './components/video/VideoChat.jsx';
import LoggedInDashboard from './components/home/LoggedInDashboard.jsx';

import './App.css';

class App extends Component {
 constructor() {
    super()
    this.state = {
    loggedInUser: null,
    userType: null,
   }

   this.logInUser = this.logInUser.bind(this);
 }

 logInUser(userid) {
  this.setState({
    loggedInUser: userid
  })
}

  render() {

    return (
    <Router>
      <div>
          {this.loggedInUser === null ? <LoggedInMenu /> : <FixedMenu /> }
          <Switch> 

            <Route exact path='/home' component={LoggedOutHomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/coachlist' component={CoachList} />
            <Route path='/video' component={VideoChat} />
            <Route path='/login' render={routeProps => <LoginPage {...routeProps} logInUser={this.logInUser} />} />
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
