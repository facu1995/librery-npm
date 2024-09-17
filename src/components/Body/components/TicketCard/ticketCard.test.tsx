import '@testing-library/jest-dom';
import TicketCard from './TicketCard';
import { RenderResult, render } from '@testing-library/react';
import { TICKETS } from '../../utils/TICKETS';
import React from 'react';

describe('<TicketCard />', () => {
  const mockedTicket: any = TICKETS.issueResponseDto[0];
  let component: RenderResult = render(
    <TicketCard index={0} element={mockedTicket} />
  );

  test('component render element data correctly', () => {
    expect(component.getByTestId('ticket-key').textContent).toBe(
      mockedTicket.key
    );
  });
});
