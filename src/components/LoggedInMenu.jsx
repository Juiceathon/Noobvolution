import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Container,
  Menu,
} from 'semantic-ui-react';


class LoggedInMenu extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' fitted size='large' inverted>
        <Container>
          <Menu.Item
            as={NavLink}
            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={this.handleItemClick}
            to='/dashboard'>
            Dashboard
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
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              active={activeItem === 'Logout'}
              onClick={this.props.logoutUser}
              to='/home'>
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}


export default withRouter(LoggedInMenu);