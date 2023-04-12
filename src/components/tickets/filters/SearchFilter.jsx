import { Button, Dropdown, Grid, Input } from '@nextui-org/react';
import React from 'react';
import { SearchIcon } from '../../../assets/searchIcon';

export const SearchFilter = () => {
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
          />
        </Grid>
        <Grid>
          {' '}
          <Button auto color={'secondary'} flat css={{ marginLeft: '8px' }}>
            <SearchIcon
              fill={'var(--nextui-colors-secondaryLightContrast)'}
              size={14}
            />
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
};
