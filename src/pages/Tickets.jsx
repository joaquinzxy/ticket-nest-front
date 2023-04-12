import React, { useEffect, useState } from 'react';
import { Header } from '../components/common/Header';
import { getJWT } from '../helpers/checkLocalStorage';
import { Navigate } from 'react-router-dom';
import { TicketGrid } from '../components/tickets/TicketGrid';
import { useFetchTickets } from '../hooks/useFetchTickets';
import {
  Container,
  Dropdown,
  Grid,
  Loading,
  Pagination,
  Spacer,
} from '@nextui-org/react';
import { FilterSelector } from '../components/tickets/FilterSelector';
import { fetchData } from '../helpers/fetchData';
import { endpoints } from '../helpers/endpoints';

export const Tickets = () => {
  if (!getJWT()) {
    return <Navigate to="/" />;
  }

  const [filterData, setFilterData] = useState({
    status: 'All',
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

  const handleStatus = (status) => {
    setFilterData({ ...filterData, status: Array.from(status)[0], page: 1 });
  };

  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getTickets = async (page, limit) => {
      const tickets = await fetchData(
        `${endpoints.getTickets}?page=${page}&limit=${limit}`
      );
      return tickets;
    };
    const { page, limit } = filterData;
    getTickets(page, limit).then((tickets) => {
      setIsLoading(false);
      setTickets(tickets);
    });
  }, [filterData]);

  return (
    <>
      <Header activePage={'Tickets'} />
      {isLoading ? (
        <Grid.Container justify="center" alignContent="center">
          <Grid css={{ marginTop: '40vh' }}>
            <Loading size="lg">Loading tickets</Loading>
          </Grid>
        </Grid.Container>
      ) : (
        <>
          <FilterSelector
            limitSelected={new Set([filterData.limit])}
            setLimit={handleLimit}
            categorySelected={new Set([filterData.category])}
            setCategory={handleCategory}
            statusSelected={new Set([filterData.status])}
            setStatus={handleStatus}
          />
          <TicketGrid tickets={tickets} />
          <Grid.Container justify="center" css={{ padding: '4rem' }}>
            <Grid>
              <Pagination
                total={3}
                initialPage={filterData.page}
                onChange={handlePagination}
              />
            </Grid>
          </Grid.Container>
        </>
      )}
    </>
  );
};
