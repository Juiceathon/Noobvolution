import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react';


const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item 
        as={NavLink}
        name='Home'
        to='/'
        active>
        Home
      </Menu.Item>

      <Menu.Item 
        as={NavLink}
        name='About'
        to='/about'>
        About
      </Menu.Item>

      <Menu.Item 
        as={NavLink}
        name='CoachList'
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

export default withRouter(FixedMenu);