import React, { Component } from 'react';
import logo from './logo.svg';
import LambdaDemo from './lambda/LambdaDemo.jsx';
import FixedMenu from './components/FixedMenu.jsx';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo/>
      </div>
    );
  }
}

export default App;
