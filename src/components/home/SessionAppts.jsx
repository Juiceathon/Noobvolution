import React, { Component } from 'react';
import {
  Table,
  Button, 
  Icon
} from 'semantic-ui-react'
import { formattedFromUnix } from '../../utils/unixConversion.js';

class SessionAppts extends Component {
  constructor(props) {
    super(props);
    
    this.goToSession = this.goToSession.bind(this);
  }

  goToSession(e) {
    this.props.history.push(`/video/${this.props.appt.session_id}`)
  }

  render() {

    return (
      <Table.Row>
        <Table.Cell>{this.props.appt.coach_name}</Table.Cell>
        <Table.Cell>{this.props.appt.game_name}</Table.Cell>
        <Table.Cell>{formattedFromUnix(this.props.appt.timeslot)}</Table.Cell>
        <Table.Cell>
          <Button icon>
            <Icon onClick={this.goToSession} name='record'/>
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default SessionAppts;