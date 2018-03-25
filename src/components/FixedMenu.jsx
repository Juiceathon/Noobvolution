import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react';


class FixedMenu extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' fitted size='large'>
        <Container>
          <Menu.Item 
            as={NavLink}
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            to='/home'>
            Home
          </Menu.Item>

          <Menu.Item 
            as={NavLink}
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
            to='/about'>
            About
          </Menu.Item>

          <Menu.Item 
            as={NavLink}
            name='CoachList'
            active={activeItem === 'CoachList'}
            onClick={this.handleItemClick}
            to='/coachlist'>
            Coaches
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item 
            as={NavLink}
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
            to='/login'>
            Log in
            </Menu.Item>

            <Dropdown item text='Sign Up'>
              <Dropdown.Menu>
                <Dropdown.Item
                as={NavLink}
                active={activeItem === 'Signup-Coach'}
                onClick={this.handleItemClick}
                to='/signup/coach'
                >
                  I am a Coach
                </Dropdown.Item>

                <Dropdown.Item
                  as={NavLink}
                  active={activeItem === 'Signup-Player'}
                  onClick={this.handleItemClick}
                  to='/signup/player'>
                  I am a Player
                  </Dropdown.Item>
                  
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}


export default withRouter(FixedMenu);