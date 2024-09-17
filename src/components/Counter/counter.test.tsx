import '@testing-library/jest-dom';
import Counter from './Counter';
import React from 'react';
import { RenderResult, render } from '@testing-library/react';

describe('<Counter />', () => {
  let component: RenderResult;
  let counter: HTMLElement | null;

  beforeEach(() => {
    component = render(<Counter color="principal" label="Test Counter" />);
    counter = component.container.querySelector('button');
  });

  test('If counter is principal, class is Principal', () => {
    expect(counter).toHaveClass(`principal`);
  });

  test('If counter is secondary, class is secondary', () => {
    component = render(<Counter color="secondary" label="Test Counter" />);
    counter = component.container.querySelector('button');
    expect(counter).toHaveClass(`secondary`);
  });

  test('Counter renders label text', () => {
    expect(counter).toHaveTextContent('Test Counter');
  });

  test('Counter renders amount', () => {
    const amount = 5;
    component = render(
      <Counter color="secondary" label="Test Counter" amount={amount} />
    );
    counter = component.container.querySelector('button');
    expect(counter).toHaveTextContent(String(amount));
  });
});
