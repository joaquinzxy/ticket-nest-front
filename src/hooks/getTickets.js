import { endpoints } from '../helpers/endpoints';
import { fetchData } from '../helpers/fetchData';

export const getTickets = async ({
  limit = 0,
  page = 0,
  category,
  isClosed,
  textParam = '',
}) => {
  const { tickets, total } = await fetchData(
    `${endpoints.getTickets}?page=${
      page - 1
    }&limit=${limit}&category=${category.toLowerCase()}&isClosed=${isClosed.toLowerCase()}&textParam=${textParam}`
  );
  return { tickets, total };
};
