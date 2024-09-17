import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import Header from './Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Header />', () => {
  test('Should render children elements', () => {
    render(
      <Header>
        <h1>Test Children</h1>
      </Header>
    );

    const testTitle = screen.getByText('Test Children');
    expect(testTitle).toBeInTheDocument();
  });
});
