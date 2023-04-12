import { Container, Dropdown, Grid } from '@nextui-org/react';
import React from 'react';
import { CategoryFilter } from './filters/CategoryFilter';
import { PaginationFilter } from './filters/PaginationFilter';
import { StatusFilter } from './filters/StatusFilter';
import { SearchFilter } from './filters/SearchFilter';

export const FilterSelector = ({
  limitSelected,
  setLimit,
  categorySelected,
  setCategory,
  statusSelected,
  setStatus,
}) => {
  return (
    <Grid.Container justify="center" css={{ padding: '1rem' }} gap={2}>
      <Grid>
        <SearchFilter />
      </Grid>
      <Grid>
        <StatusFilter selected={statusSelected} setSelected={setStatus} />
      </Grid>
      <Grid>
        <CategoryFilter selected={categorySelected} setSelected={setCategory} />
      </Grid>
      <Grid>
        <PaginationFilter selected={limitSelected} setSelected={setLimit} />
      </Grid>
    </Grid.Container>
  );
};
