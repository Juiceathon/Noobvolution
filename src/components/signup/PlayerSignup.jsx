import React, { Component } from 'react';
import {
  Container, 
  Grid, 
  Form, 
  Header, 
  Icon, 
  Checkbox, 
  Button
} from 'semantic-ui-react';

class PlayerSignup extends Component {
  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      avatarurl: '',
    }
  }

  render() {
    return (
      <Container style={{ minHeight: 500, padding: '5em 0em' }}>
        <Grid centered>
          <Form>
            <Header as='h2' icon textAlign='center'>
              <Icon name='trophy' circular color='black' inverted />
              <Header.Content>
                Noobvolution: Coach Sign Up
            </Header.Content>
            </Header>
            <Form.Field>
              <label>Full Name</label>
              <input placeholder='Full Name' />
            </Form.Field>
            <Form.Field>
              <label>E-Mail</label>
              <input placeholder='E-Mail' />
            </Form.Field>
            <Form.Field>
              <label>Photo</label>
              <input placeholder='Upload Photo' />
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
export default PlayerSignup;