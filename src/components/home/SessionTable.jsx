import React, { Component } from 'react';
import {
  Table, 
} from 'semantic-ui-react'
import SessionAppts from './SessionAppts.jsx';

class SessionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appts: this.props.appts
    }
  }

  render() {

    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Coach</Table.HeaderCell>
            <Table.HeaderCell>Game</Table.HeaderCell>
            <Table.HeaderCell>Session Time</Table.HeaderCell>
            <Table.HeaderCell>Go Live</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.appts.map(appt => <SessionAppts appt={appt} history={this.props.history} />)}
        </Table.Body>
      </Table>
    )
  }
}

export default SessionTable;