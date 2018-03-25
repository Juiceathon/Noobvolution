import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react';


class LoggedInMenu extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' fitted size='large' inverted>
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
            name='CoachList'
            active={activeItem === 'CoachList'}
            onClick={this.handleItemClick}
            to='/coachlist'>
            Coaches
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            name='VideoChat'
            active={activeItem === 'VideoChat'}
            onClick={this.handleItemClick}
            to='/video'>
            Video
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}


export default withRouter(LoggedInMenu);