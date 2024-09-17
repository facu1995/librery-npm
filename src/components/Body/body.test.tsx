import '@testing-library/jest-dom';
import Body from './Body';
import React from 'react';
import { TICKETS } from '../Body/utils/TICKETS';
import { RenderResult, render } from '@testing-library/react';
import { Ticket } from './types';

describe('<Body />', () => {
  let tickets: {}[];
  let component: RenderResult;

  beforeEach(() => {
    tickets = [];
    component = render(<Body tickets={tickets as Ticket[]} />);
  });

  test('Component renders a line for every ticket passed in props', () => {
    const textInFirstTicket = 'prueba zonahoraria';
    tickets = TICKETS.issueResponseDto;
    component = render(<Body tickets={tickets as Ticket[]} />);
    expect(component.container).toHaveTextContent(textInFirstTicket);
  });

  test('Component does not render list when tickets are empty', () => {
    const ticketHeadersList = component.container.querySelector('ul');
    expect(ticketHeadersList).not.toBeInTheDocument();
  });
});
