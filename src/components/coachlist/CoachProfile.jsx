import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label, Grid, Modal, Header, Form, Message } from 'semantic-ui-react';
let unix = require('../../utils/unixConversion');

class CoachProfile extends Component {
  constructor() {
    super()
    this.state = {
      availability: [],
      selectedOption: null,
      success: false,
      error: null
    }
    this.fetchAvailability = this.fetchAvailability.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  componentDidMount() {
    this.fetchAvailability();
  }

  fetchAvailability() {
    fetch(`/.netlify/functions/handler?type=availability&coachId=${this.props.coach.coach_id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ availability: json });
      })
  }

  handleOptions(event, target) {
    this.setState({
      selectedOption: target.value
    })
  }

  submitBooking() {
    let data = {
      type: 'booking',
      timeslot: this.state.selectedOption, 
      coachId: this.props.coach.coach_id, 
      playerId: this.props.loggedInUser.player_id || 2, 
      gameId: this.props.coach.game_id
    }
    fetch('.netlify/functions/handler', {
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then(json => this.setState({ success: true }))
      .catch(err => console.log(err))
  }

  render() {
    return (<Grid columns={16} padded>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={10}>
        <Item.Group divided>
          <Item>
            <Item.Image
              size='small'
              verticalAlign='middle'
              src={this.props.coach.avatar_url} />
            <Item.Content>
              <Item.Header as='coach'>{this.props.coach.coach_name}</Item.Header>
              <Item.Meta>
                <span className='coach-game'>{this.props.coach.game_id === 3 ? 'League of Legends' : 'Dota 2'}</span>
              </Item.Meta>
              <Item.Meta>
                <span className='coach-position'>Position: {this.props.coach.position}</span>
              </Item.Meta>
              <Item.Meta>
                <span className='coach-cost'>{this.props.coach.coach_name}'s Rate: ${this.props.coach.hourly_rate}/hr</span>
              </Item.Meta>
              <Item.Description>
                {this.props.coach.description}
              </Item.Description>
              <Item.Extra>
                { this.props.loggedInUser ? <Modal style={{ 'marginTop': '25vh', 'marginLeft': '20vw' }} trigger={
                  <Button primary floated='right'>
                    Book a Time Slot!
                <Icon name='right chevron' />
                  </Button>
                }>
                  <Modal.Content image>
                    <ImageComponent wrapped size='medium' src={this.props.coach.avatar_url} />
                    <Modal.Description>
                      <Header>{this.props.coach.coach_name}</Header>
                      <p>{this.props.coach.game_id === 3 ? 'League of Legends' : 'Dota 2'}</p>
                      <p>{this.props.coach.position}</p>
                      <p>{this.props.coach.coach_name}'s Rate: ${this.props.coach.hourly_rate}/hr</p>
                      <p>{this.props.coach.description}</p>
                      <Form onSubmit={this.submitBooking}>
                        <Form.Group widths='equal'>
                          <Form.Dropdown placeholder="Click here for options" label='Select an available session' 
                          onChange={this.handleOptions}
                          options = {this.state.availability.map((timeslot) => {
                            return { value: timeslot.toString(), text: unix.formattedFromUnix(timeslot)}
                          })}>
                          </Form.Dropdown>
                        </Form.Group>
                        <Button type="submit">Book</Button>
                        {this.state.success ? <Message header='Session booked!' /> : ''}
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
                : ''}
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>)
  }
} 

export default CoachProfile;

