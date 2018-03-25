import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

class MiddleHomePageSegment extends Component {
  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>Top Coaches with Live Video Sharing</Header>
              <p style={{ fontSize: '1.33em' }}>
                The best portal for getting real time coaching from top gaming pros! Simple interface for exploring coaches and their
                availability. Hop into a real time video sharing with the click of a button!
                      </p>
              <Header as='h3' style={{ fontSize: '2em' }}>Go back and review previous coaching sessions!</Header>
              <p style={{ fontSize: '1.33em' }}>
                Felt like you didn't quite grasp everything from your previous lesson? No problem, go back and rewatch archived lessons
                review the notes taken during the session.
                      </p>
            </Grid.Column>
            <Grid.Column floated='right' width={7}>
              <Image
                fluid
                rounded
                size='big'
                src='https://hypb.imgix.net/image/2018/03/facebook-stream-pc-games-through-live-01.jpg?q=75&w=1000&fit=max&auto=compress%2Cformat'
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check It Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default MiddleHomePageSegment;