import React, { useEffect, useState } from 'react';
import { Header } from '../components/common/Header';
import { getJWT } from '../helpers/checkLocalStorage';
import { Navigate } from 'react-router-dom';
import { TicketGrid } from '../components/tickets/TicketGrid';
import { Grid, Loading, Pagination, Spacer, Text } from '@nextui-org/react';
import { FilterSelector } from '../components/tickets/FilterSelector';
import { fetchData } from '../helpers/fetchData';
import { endpoints } from '../helpers/endpoints';
import { getTickets } from '../hooks/getTickets';

export const Tickets = () => {
  if (!getJWT()) {
    return <Navigate to="/" />;
  }

  const [filterData, setFilterData] = useState({
    textParam: '',
    isClosed: 'All',
    category: 'All',
    limit: 10,
    page: 1,
  });

  const handlePagination = (page) => {
    setFilterData({ ...filterData, page });
  };

  const handleLimit = (limit) => {
    setFilterData({ ...filterData, limit: parseInt(...limit), page: 1 });
  };

  const handleCategory = (category) => {
    setFilterData({
      ...filterData,
      category: Array.from(category)[0],
      page: 1,
    });
  };

  const handleStatus = (isClosed) => {
    setFilterData({
      ...filterData,
      isClosed: Array.from(isClosed)[0],
      page: 1,
    });
  };

  const handleSearchInput = (textParam) => {
    setFilterData({ ...filterData, textParam, page: 1 });
  };

  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [totalTickets, setTotalTickets] = useState(0);

  const applyFilters = () => {
    setIsLoading(true);

    getTickets(filterData).then(({ tickets, total }) => {
      setIsLoading(false);
      setTickets(tickets);
      setTotalTickets(total);
    });
  };

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <>
      <Header activePage={'Tickets'} />
      <FilterSelector
        limitSelected={new Set([filterData.limit])}
        setLimit={handleLimit}
        categorySelected={new Set([filterData.category])}
        setCategory={handleCategory}
        statusSelected={new Set([filterData.isClosed])}
        setStatus={handleStatus}
        paramText={filterData.textParam}
        setParamText={handleSearchInput}
        handleApply={applyFilters}
      />
      {isLoading ? (
        <Grid.Container justify="center" alignContent="center">
          <Grid css={{ marginTop: '40vh' }}>
            <Loading size="lg">Loading tickets</Loading>
          </Grid>
        </Grid.Container>
      ) : (
        <>
          {tickets.length != 0 ? (
            <>
              <TicketGrid tickets={tickets} />
              <Grid.Container justify="center" css={{ padding: '4rem' }}>
                <Grid>
                  <Pagination
                    total={Math.ceil(totalTickets / filterData.limit)}
                    initialPage={filterData.page}
                    onChange={handlePagination}
                  />
                </Grid>
              </Grid.Container>
            </>
          ) : (
            <Grid.Container justify="center" css={{ padding: '4rem' }}>
              <Grid>
                <Text h3>We couldn't find anything 😩</Text>
              </Grid>
            </Grid.Container>
          )}
        </>
      )}
    </>
  );
};
