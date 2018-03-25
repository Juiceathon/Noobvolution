import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Menu,
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
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(FixedMenu);