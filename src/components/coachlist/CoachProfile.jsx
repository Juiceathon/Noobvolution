import React from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label, Grid } from 'semantic-ui-react'

const CoachProfile = () => (
  <Grid columns={16} padded>
    <Grid.Column width={3}></Grid.Column>
    <Grid.Column width={10}>
      <Item.Group divided>
        <Item>
          <Item.Image
            size='small'
            verticalAlign='middle'
            src='http://1.bp.blogspot.com/-Q82BOFj8CzI/Vkh-JwHFmNI/AAAAAAAAAFs/EgcjRfnXmsA/s1600/dendi_300_350.jpg' />
          <Item.Content>
            <Item.Header as='coach'>Danil "Dendi" Ishutin</Item.Header>
            <Item.Meta>
              <span className='coach-cost'>Dendi's Rate: $50/hr</span>
            </Item.Meta>
            <Item.Description>
              Danil "Dendi" Ishutin is a professional Dota 2 player on Natus Vincere.
              Well known for his solo mid skills, he is regarded as one of the most creative players in the scene today,
              and is renowned for his unorthodox play style and unconventional skill and item builds.
          </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Book a Time Slot!
              <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Column>
    <Grid.Column width={3}></Grid.Column>
  </Grid>
)

export default CoachProfile;

