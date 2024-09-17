import Body from '../Body/Body';
import Header from '../Header/Header';
import FilterControls from '../FilterControls/FilterControls';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';
import { TICKETS } from '../Body/utils/TICKETS';
import Paginator from '../Paginator/Paginator';
import { useState } from 'react';
import CLOSE_TICKET_JSON from './utils/CLOSE_TICKET.json';
import PopUp from '../PopUp/PopUp';
import style from './ticketControlPage.module.css';
import DynamicForm from '../DynamicForm/DynamicForm';
import { CloseTicket, Ticket } from '../Body/types';
import useFilterTickets from '../../hooks/useFilterTickets';
import React from 'react';

export interface FilterParams {
  [dateOf: string]: string;
  createdFrom: string;
  createfUntil: string;
  byState: string;
  adressedTo: string;
  ticketType: string;
}

const TicketControlPage = () => {
  const tickets = TICKETS.issueResponseDto;

  const {
    filterByStatus,
    getFilterParams,
    resetParams,
    handleSearchByName,
    filteredTickets,
  } = useFilterTickets(tickets);

  const [closeTicketPopUp, setCloseTicketPopUp] = useState<CloseTicket>({
    open: false,
  } as CloseTicket);
  const [createTicketModal, setCreateTicketModal] = useState<boolean>(false);

  const handleCloseTicketPopUp = (obj: { id: string; summary: string }) => {
    setCloseTicketPopUp({
      id: obj.id || '',
      summary: obj.summary || '',
      open: !closeTicketPopUp.open,
    });
  };

  return (
    <div className={style.ticketPage}>
      <Header>
        <Counter
          color="secondary"
          label="Esperando respuesta"
          items={tickets as Ticket[]}
          param="respuesta"
          onClick={() => filterByStatus('respuesta')}
        />
        <Counter
          color="principal"
          label="Confirmar resolución"
          items={tickets as Ticket[]}
          param="confirmar"
          onClick={() => filterByStatus('confirmar')}
        />
        <Button
          type="primary"
          size="large"
          label="+ Crear ticket"
          borderRadius={5}
          onClick={() => {
            setCreateTicketModal(true);
          }}
        />
      </Header>
      <FilterControls
        handle={getFilterParams}
        reset={resetParams}
        searchByName={handleSearchByName}
      />
      <Body
        tickets={filteredTickets as Ticket[]}
        handleModal={handleCloseTicketPopUp}
      />
      <br />
      <Paginator handleChange={() => {}} />
      <PopUp
        title={`¿Desea cerrar el ticket ${closeTicketPopUp.id} - ${closeTicketPopUp.summary}?`}
        isOpen={closeTicketPopUp.open}
        isList={false}
        showButtons={false}
        className={style.closeTicketModal}
      >
        <DynamicForm
          json={CLOSE_TICKET_JSON}
          handleSubmit={() => {
            setCloseTicketPopUp({ id: '', summary: '', open: false });
          }}
          button1="Enviar"
          close={handleCloseTicketPopUp}
        />
      </PopUp>
      <PopUp
        title={'Crear ticket'}
        showButtons={false}
        isOpen={createTicketModal}
        isList={false}
      >
        <DynamicForm
          handleSubmit={() => {
            alert('Ticket Creado');
            setCreateTicketModal(false);
          }}
          close={() => {
            setCreateTicketModal(false);
          }}
        />
      </PopUp>
    </div>
  );
};

export default TicketControlPage;
