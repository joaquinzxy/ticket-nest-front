import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { endpoints } from '../helpers/endpoints';

export const useFetchTickets = ({ limit = 0, page = 0 }) => {
  console.log(limit, page);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTickets = async () => {
    const fetchetTickets = await fetchData(
      `${endpoints.getTickets}?page=${page}&limit=${limit}`
    );
    setTickets(fetchetTickets);
    setIsLoading(false);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return {
    tickets,
    isLoading: isLoading,
  };
};
