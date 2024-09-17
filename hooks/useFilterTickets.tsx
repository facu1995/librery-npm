import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FilterParams } from '../components/TicketControlPage/TicketControlPage';
import { format } from 'date-fns';

const useFilterTickets = (tickets: {}[]) => {
  const [filteredTickets, setFilteredTickets] = useState<{}[]>(tickets);
  const [filterParams, setFilterParams] = useState<FilterParams>(
    {} as FilterParams
  );
  const [searchByName, setSearchByName] = useState<string>('');

  const filterByStatus = (param: string) => {
    const filtered = tickets.filter((issue: any) =>
      issue.status.supportCenterName.toLowerCase().match(param)
    );
    if (filteredTickets.length !== filtered.length) {
      setFilteredTickets(filtered);
    } else {
      setFilteredTickets(tickets);
    }
  };

  const resetParams = () => {
    setFilterParams({} as FilterParams);
  };

  const getFilterParams = (obj: FilterParams) => {
    setFilterParams(obj);
  };

  const filterByDate = useCallback(
    (arr: {}[]) => {
      const { dateOf, createdFrom, createdUntil } = filterParams;
      if (createdFrom) {
        if (!createdUntil) {
          const filtered = arr.filter(
            (ticket: any) =>
              format(new Date(ticket[dateOf]), 'yyyyMMdd') >= createdFrom
          );
          return filtered;
        } else {
          const filtered = arr.filter((ticket: any) => {
            return (
              format(new Date(ticket[dateOf]), 'yyyyMMdd') >= createdFrom &&
              format(new Date(ticket[dateOf]), 'yyyyMMdd') <= createdUntil
            );
          });
          return filtered;
        }
      } else {
        return arr;
      }
    },
    [filterParams]
  );

  const handleSearchByName = (param: ChangeEvent) => {
    const { target } = param;
    setSearchByName((target as HTMLInputElement).value.toLowerCase());
  };

  useEffect(() => {
    const filterValues = Object.values(filterParams);
    const DEFAULT_VALUE = filterValues.shift();
    DEFAULT_VALUE?.trim();
    const allParamsAreEmpty = filterValues.every(
      (value) => value === null || value === ''
    );
    if (!allParamsAreEmpty) {
      const { dateOf, ticketType, byState, createdFrom, createdUntil } =
        filterParams;
      if (ticketType === '' || byState === '') {
        if (ticketType !== '') {
          const filtered = tickets.filter(
            (ticket: any) =>
              ticket.issueType.toLowerCase() === ticketType.toLowerCase()
          );
          const sorted = filterByDate(filtered);
          setFilteredTickets(sorted);
        }
        if (byState !== '') {
          const filtered = tickets.filter((issue: any) =>
            issue.status.supportCenterName
              .toLowerCase()
              .match(byState.toLowerCase())
          );
          const sorted = filterByDate(filtered);
          setFilteredTickets(sorted);
        }
      } else {
        const filtered = tickets.filter((ticket: any) => {
          if (!createdFrom) {
            return (
              ticket.issueType === ticketType &&
              ticket.status.supportCenterName.toLowerCase() ===
                byState.toLowerCase()
            );
          } else {
            if (!createdUntil) {
              return (
                ticket.issueType === ticketType &&
                ticket.status.supportCenterName.toLowerCase() ===
                  byState.toLowerCase() &&
                format(new Date(ticket[dateOf]), 'yyyyMMdd') >= createdFrom
              );
            } else {
              return (
                ticket.issueType === ticketType &&
                ticket.status.supportCenterName.toLowerCase() ===
                  byState.toLowerCase() &&
                format(new Date(ticket[dateOf]), 'yyyyMMdd') >= createdFrom &&
                format(new Date(ticket[dateOf]), 'yyyyMMdd') <= createdUntil
              );
            }
          }
        });
        setFilteredTickets(filtered);
      }
    } else {
      setFilteredTickets(tickets);
    }
  }, [filterParams, tickets, filterByDate]);

  useEffect(() => {
    const filtered = tickets.filter((ticket: any) =>
      ticket.summary.toLowerCase().match(searchByName)
    );
    setFilteredTickets(filtered);
  }, [searchByName, tickets]);

  return {
    filteredTickets,
    filterByDate,
    filterByStatus,
    getFilterParams,
    resetParams,
    handleSearchByName,
  };
};

export default useFilterTickets;
