import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import CoachProfile from './CoachProfile.jsx';

class CoachesList extends Component {
  constructor() {
    super()
    this.state = {
      coaches: [],
      filteredCoaches: [],
      filters: []
    }
    this.fetchCoachesList = this.fetchCoachesList.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    this.fetchCoachesList();
  }

  handleSelection(event, data) {
    let gameId = data.children === "League of Legends" ? 2 : 3;
    let filtered = this.state.coaches.filter((coach) => {
      return coach.game_id === gameId;
    })
    this.setState({
      filteredCoaches: filtered
    });
  }

  fetchCoachesList() {
    fetch('/.netlify/functions/handler?type=search')
      .then(response => response.json())
      .then(json => {
        json.sort((entry1, entry2) => entry1.game_id > entry2.game_id)
        this.setState({ coaches: json, filteredCoaches:json });
      })
  }
  
  render() {
    return (
    <div style={{ padding: '4em 0em 0em 4em' }}>
      <div id="modal-mount" />
      <div style={{'textAlign': 'center', padding: '2em'}}>
        <Dropdown text='Filter by Game' icon='filter' floating labeled button className='icon'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.handleSelection}>League of Legends</Dropdown.Item>
            <Dropdown.Item onClick={this.handleSelection}>Dota 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        {this.state.filteredCoaches.map((coach) => <CoachProfile loggedInUser={this.props.loggedInUser} coach={coach}/>)}
      </div>
    </div>
    )
  }
}

export default CoachesList;

