import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import MicroBarChart from 'react-micro-bar-chart'
//import PropTypes from 'prop-types'

class List extends React.Component {


  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing></Table.HeaderCell>
            <Table.HeaderCell>Program Name</Table.HeaderCell>
          
            <Table.HeaderCell collapsing>Started At</Table.HeaderCell>
            <Table.HeaderCell collapsing>Last week activities</Table.HeaderCell>
            <Table.HeaderCell collapsing>Total</Table.HeaderCell>
            <Table.HeaderCell collapsing>Learnt</Table.HeaderCell>
            
            <Table.HeaderCell collapsing></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.programs.map((item, idx) => (
              <Table.Row key={idx}>
                <Table.Cell>
                  <Icon color='blue' name='arrow alternate circle right' />
                </Table.Cell>
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.startedAt}</Table.Cell>
                <Table.Cell>
                  <MicroBarChart
                    width={150}
                    height={20}
                    hoverColor="rgb(161,130,214)"
                    fillColor="rgb(210,193,237)"
                    tooltip
                    data={item.activities}
                  />    
                </Table.Cell>
                <Table.Cell>{item.items}</Table.Cell>
                <Table.Cell>{item.learnt}</Table.Cell>
                <Table.Cell collapsing>
              <Icon color='red' name='trash' />
            </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    )
  }
}

export default List
