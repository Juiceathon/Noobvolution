import React, { Component } from 'react';
import {
  Table, 
} from 'semantic-ui-react'

class SessionTable extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.appts
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
          <Table.Row>
            <Table.Cell>Impact</Table.Cell>
            <Table.Cell>League of Legends</Table.Cell>
            <Table.Cell>Mar, 25th 2018 10:00PM</Table.Cell>
            <Table.Cell>Video Icon</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default SessionTable;