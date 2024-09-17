import '@testing-library/jest-dom';
import Message, { MessageProps } from './Message';
import React from 'react';
import { RenderResult, render } from '@testing-library/react';

describe('<Message />', () => {
  let component: RenderResult;

  let messageProps: MessageProps = {
    type: 'error',
    message1: 'Oops, hubo un error',
    message2: 'Intentá de nuevo más tarde',
  };

  beforeEach(() => {
    component = render(<Message {...messageProps} />);
  });

  test('Should display messages as in props', () => {
    const title = component.container.querySelector('h2');
    const description = component.container.querySelector('span');

    expect(title?.textContent).toBe(messageProps.message1);
    expect(description?.textContent).toBe(messageProps.message2);
  });
});
