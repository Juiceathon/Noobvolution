import React, { Component } from 'react'; 
import { 
  Icon, 
  Image as ImageComponent,  
  Grid,
  Card,
  Feed, 
  Header
} from 'semantic-ui-react'
import SessionTable from './SessionTable.jsx';

const events = [{
    date: '1 Hour Ago',
    image: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/thumb/2/26/C9_Sneaky_2018_Spring.png/220px-C9_Sneaky_2018_Spring.png?version=842f8cca0f802dfae5cd6439c3215711',
    meta: '9 Likes',
    summary: 'Sneaky is live on twitch!',
  }, {
    date  : '2 days ago',
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/arteezy-profile_image-f2f55f87a5cd6e15-300x300.png',
    meta: '21 Likes',
    summary: 'Arteezy added 2 new images',
    extraImages: [
      'https://i.ytimg.com/vi/qEI8lIDpfSI/maxresdefault.jpg',
      'https://i.ytimg.com/vi/dhVJ78FxI-Y/maxresdefault.jpg',
    ],
  }, {
    date: '3 days ago',
    image: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/7/78/TL_Doublelift_2018_Spring.png?version=0e71caa168058e06f01ac8d6770a161f',
    meta: '58 Likes',
    summary: 'Doublelift posted on his page',
    extraText: "I'm the greatest. Everyone else is just trash.",
  }, {
    date: '4 days ago',
    image: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/thumb/3/37/CLG_Darshan_2018_Spring.png/220px-CLG_Darshan_2018_Spring.png?version=4a2b07b808af1cf7ed7ad96ebd726055',
    meta: '41 Likes',
    summary: 'Darshan added 2 new guides',
    extraText: 'Look at these fun guides I found on Mobafire. Good times.',
    extraImages: [
      'http://vrzone.com/wp-content/uploads/2013/05/mobafire-logo1.png',
      'https://lolupdates.files.wordpress.com/2012/07/mobafire.png',
    ],
  }
];

class LoggedInDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }
  componentDidMount() {
    this.getAppointments();
  }
  getAppointments () {
    fetch(`/.netlify/functions/handler?type=appointments&playerId=${this.props.loggedInUser.player_id}`)
      .then(response => response.json())
      .then(json => { this.setState({appointments : json} )
      }); 
  }

  render() {
    return (
      <Grid columns={16} padded>
        <Grid.Column width={10}>
          <Grid.Row>
            <Header as='h2' style={{ marginTop: 20, marginBottom: 10 }}>
              Player Upcoming Sessions
            </Header>
          </Grid.Row>
          <Grid.Row>
            <SessionTable history={this.props.history} appts={this.state.appointments}/>
          </Grid.Row>
          <Grid.Row>
            <Header as='h2' style={{marginTop: 20, marginBottom: 10}}>
              Player Activity Feed
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Feed events={events} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={6}>
        <Card>
            <ImageComponent src={this.props.loggedInUser.avatar_url}/>
          <Card.Content>
            <Card.Header>
              {this.props.loggedInUser.player_name.split(' ')[0]}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              {this.props.loggedInUser.player_name.split(' ')[0]} is Bronze V.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
          <Card.Content extra>
            <a href='/video'>
              <Icon name='record' />
              Start a session
            </a>
          </Card.Content>
        </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoggedInDashboard; 