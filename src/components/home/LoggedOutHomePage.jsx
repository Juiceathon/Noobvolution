import React, { Component } from 'react';
import MiddleHomePageSegment from './MiddleHomePageSegment.jsx';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';

class LoggedOutHomePage extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Noobvolution'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
            />
            <Header
              as='h2'
              content="Receive Coaching from the Top Gaming Pro's"
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button primary size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>

        <MiddleHomePageSegment />
      </div>
    )
  }
}

export default LoggedOutHomePage;
