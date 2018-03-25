import React, { Component } from 'react';
import {
  Container,
  Grid,
  Form,
  Header,
  Icon,
  Button
} from 'semantic-ui-react';


class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', 
      password: '', 
    }

    this.handleChange = this.handleChange.bind(this);
    this.retrieveUserId = this.retrieveUserId.bind(this);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  retrieveUserId() {
    let data = { type: 'login', email: this.state.username };
    
    fetch('.netlify/functions/handler', {
      body: JSON.stringify(data), 
      method: 'POST'
    })
    .then(response => response.json())
    .then(json => this.props.logInUser(json[0]))
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
              <input name='username' onKeyUp={this.handleChange} placeholder='Username'/>
          </Form.Field>
          <Form.Field>
            <label> Password </label>
            <input type='password' placeholder='Password' />
          </Form.Field>
          <Button onClick={this.retrieveUserId} type='submit'>Submit</Button>
        </Form>
      </Grid>
    </Container>
    )
  }
}

export default LoginPage;