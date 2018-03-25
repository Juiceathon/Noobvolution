import React, { Component } from 'react';
import {
  Form,
  Checkbox, 
  Button, 
  Container, 
  Grid, 
  Header, 
  Icon
} from 'semantic-ui-react';

class CoachSignup extends Component {
  constructor() {
    super()
    this.state = {
      fullname: '', 
      email: '', 
      password: '', 
      gameid: '', 
      avatarurl: '', 
      hourlyrate: '', 
      position: ''
    }
  }

  render() {
    return(
      <Container style={{ minHeight: 500, padding: '5em 0em' }}>
        <Grid centered>
          <Form>
            <Header as='h2' icon textAlign='center'>
              <Icon name='trophy' circular color='black' inverted/>
              <Header.Content>
                Noobvolution: Coach Sign Up
            </Header.Content>
            </Header>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>E-Mail</label>
              <input placeholder='E-Mail' />
            </Form.Field>
            <Form.Field>
              <label>Avatar</label>
              <input placeholder='Upload Avatar' />
            </Form.Field>
            <Form.Field>
              <label>Gaming Profession</label>
              <input placeholder='Gaming Profession' />
            </Form.Field>
            <Form.Field>
              <label>Hourly Rate</label>
              <input placeholder='Ex. $75/hr' />
            </Form.Field>
            <Form.Field>
              <label>Position</label>
              <input placeholder='Ex. Mid Laner/OffLane' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid>
      </Container>
    )
  }
}

export default CoachSignup;