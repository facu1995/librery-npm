import { Button, Counter } from '../../../components';
import React from 'react';

export const TICKET_PAGE_BUTTONS = (
  <>
    <Counter color="secondary" label="Esperando respuesta" amount={0} />
    <Counter color="principal" label="Confirmar resolución" amount={0} />
    <Button
      type="primary"
      label="+ Crear Ticket"
      size="larger"
      borderRadius={5}
    />
  </>
);

export default TICKET_PAGE_BUTTONS;
