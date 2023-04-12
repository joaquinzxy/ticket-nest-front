import { Dropdown } from '@nextui-org/react';
import React from 'react';

export const PaginationFilter = ({ selected, setSelected }) => {
  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
        Limit: {selected}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Select limit"
        color="primary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="10">10</Dropdown.Item>
        <Dropdown.Item key="20">20</Dropdown.Item>
        <Dropdown.Item key="40">40</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
