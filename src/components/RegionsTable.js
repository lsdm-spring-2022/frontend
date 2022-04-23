import React from 'react';
import { Table } from 'semantic-ui-react';

import { REGION_NAMES } from '../data/regions';

const RegionsTable = () => {
  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Region</Table.HeaderCell>
          <Table.HeaderCell>Reddit Data Range</Table.HeaderCell>
          <Table.HeaderCell>Twitter Data Range</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {REGION_NAMES.map((region, index) => (
          <Table.Row key={index}>
            <Table.Cell>{region}</Table.Cell>
            <Table.Cell>Jan 1, 2012 - Dec 31, 2021</Table.Cell>
            <Table.Cell>Apr 25, 2022 - May 2, 2022</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default RegionsTable;