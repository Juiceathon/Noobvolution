import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const CoachesList = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='http://1.bp.blogspot.com/-Q82BOFj8CzI/Vkh-JwHFmNI/AAAAAAAAAFs/EgcjRfnXmsA/s1600/dendi_300_350.jpg' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='/assets/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='/assets/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default CoachesList;