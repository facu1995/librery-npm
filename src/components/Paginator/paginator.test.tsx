import '@testing-library/jest-dom';
import Paginator from './Paginator';
import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';

describe('<Paginator >', () => {
  let component: RenderResult;

  let mockHandle = jest.fn();

  beforeEach(() => {
    component = render(<Paginator maxPages={50} handleChange={mockHandle} />);
  });

  test('User cannot set the input to a number bigger than the maxPages prop', () => {
    const input = component.container.querySelector('input');
    fireEvent.change(input!, { target: { value: '500' } });
    expect(input).toHaveValue(50);
  });

  test('User cannot set the input to a number smaller than one', () => {
    const input = component.container.querySelector('input');
    fireEvent.change(input!, { target: { value: '-10' } });
    expect(input).toHaveValue(1);
  });

  test('handleChange prop is called whenever the value of page changes', () => {
    const input = component.container.querySelector('input');
    fireEvent.change(input!, { target: { value: '20' } });
    const buttons = component.container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    const amountOfInteractions = 3;
    expect(mockHandle).toHaveBeenCalledTimes(amountOfInteractions);
  });
});
