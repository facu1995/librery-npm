import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import { MOCK_ITEMS } from './assets/mockItems';
import { MOCK_ITEMS_HEADER } from './assets/mockItemsHeader';

describe('<Table />', () => {
  beforeEach(() => {
    render(<Table listHeaderItem={MOCK_ITEMS_HEADER} listItem={MOCK_ITEMS} />);
  });

  test('Calling render with the same Headercomponent on the same Headercontainer', () => {
    expect(screen.getByTestId('header-container')).toHaveTextContent('CODIGO');
  });
});
