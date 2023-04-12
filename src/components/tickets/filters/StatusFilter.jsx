import { Dropdown } from '@nextui-org/react';
import React from 'react';

export const StatusFilter = ({ selected, setSelected }) => {
  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
        Status: {selected}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Select category"
        color="primary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="all">All</Dropdown.Item>
        <Dropdown.Item key="open">Open</Dropdown.Item>
        <Dropdown.Item key="closed">Closed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
