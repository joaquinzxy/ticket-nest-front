import { Button, Dropdown, Grid, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { SearchIcon } from '../../../assets/searchIcon';

export const SearchFilter = ({ paramText, setParamText }) => {
  const handleInput = (event) => {
    setParamText(event.target.value);
  };

  return (
    <>
      <Grid.Container>
        <Grid>
          <Input
            clearable
            contentLeftStyling={false}
            css={{
              w: '100%',
              '@xsMax': {
                mw: '300px',
              },
              '& .nextui-input-content--left': {
                h: '100%',
                ml: '$4',
                dflex: 'center',
              },
            }}
            placeholder="Search..."
            aria-labelledby="Search ticket"
            value={paramText}
            onChange={handleInput}
          />
        </Grid>
      </Grid.Container>
    </>
  );
};
