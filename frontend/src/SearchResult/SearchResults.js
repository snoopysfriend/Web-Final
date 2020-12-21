import React, { useState, useEffect } from 'react'
import { Table, Label, Menu, Icon} from 'semantic-ui-react'

import { headers } from './searchColumns'

function Filters() {
  console.log(headers)
  return (
    <>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
              {headers.map(item => (
                <Table.HeaderCell>{item}</Table.HeaderCell>
              ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {headers.map((item, index) => (
                  <Table.Cell>{index}</Table.Cell>
                ))}
          </Table.Row>
          <Table.Row>
              {headers.map((item, index) => (
                  <Table.Cell>{index}</Table.Cell>
                ))}
          </Table.Row>
          
        </Table.Body>

        
      </Table>
    </>
  )
    
}
export default Filters;