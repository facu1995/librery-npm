import '@testing-library/jest-dom';
import DynamicInput from './DynamicInput';
import React from 'react';
import { RenderResult, render } from '@testing-library/react';

describe('<DynamicInput />', () => {
  let component: RenderResult;

  const textInputData = {
    data: {
      data: {
        title: 'text',
        label: 'Mi input dinámico',
        placeholder: 'Soy un placeholder',
        type: 'text',
        options: [],
        default: '',
      },
    },
  };

  test('Input should be of type passed by props', () => {
    component = render(
      <DynamicInput key={0} handle={() => {}} data={textInputData} />
    );
    const textInput = component.container.querySelector('input');
    expect(textInput).toBeInTheDocument();
  });
});
