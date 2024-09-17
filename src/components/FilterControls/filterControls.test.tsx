import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import FilterControls from './FilterControls';
import React from 'react';

import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<FilterControls />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<FilterControls handle={() => {}} reset={() => {}} />);
  });

  test('Should open options when clicking the button and close it when click again', async () => {
    const openButton = screen.getByTestId('colapse-button');
    const filterOptions = component.container.querySelector('form');

    fireEvent.click(openButton);

    await waitFor(() => {
      expect(filterOptions).toBeInTheDocument();
    });

    fireEvent.click(openButton);

    waitForElementToBeRemoved(filterOptions).then(() =>
      expect(filterOptions).not.toBeInTheDocument()
    );
  });
});
