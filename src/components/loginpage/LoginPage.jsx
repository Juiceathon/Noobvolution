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


class LoginPage extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
    <Container style={{ minHeight: 500, padding: '5em 0em' }}>
      <Grid centered>
        <Form>
          <Header as='h2' icon textAlign='center'>
            <Icon name='trophy' circular color='black' inverted />
            <Header.Content>
              Noobvolution: Login
            </Header.Content>
          </Header>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label> Password </label>
            <input type='password' placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Grid>
    </Container>
    )
  }
}

export default LoginPage;