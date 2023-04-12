import { Dropdown } from '@nextui-org/react';
import React from 'react';

export const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
        Category: {selected}
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
        <Dropdown.Item key="problem">Problem</Dropdown.Item>
        <Dropdown.Item key="change">Change</Dropdown.Item>
        <Dropdown.Item key="service">Service</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
