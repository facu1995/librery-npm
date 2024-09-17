import '@testing-library/jest-dom';
import Nav from './Nav';
import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTES } from './utils/ROUTES';
import { screen } from '@testing-library/react';

describe('< Nav />', () => {
  let view: RenderResult = render(
    <BrowserRouter>
      <Nav routes={ROUTES} />
    </BrowserRouter>
  );

  test('When a link is clicked, it should gain the "active" class', async () => {
    const listItem = view.container.querySelectorAll('a');
    fireEvent.click(listItem[2]);
    expect(listItem[2]).toHaveClass('active');
  });

  test('When passed the "button" prop, a button should be displayed for collapsing the nav', () => {
    view.unmount();
    render(
      <BrowserRouter>
        <Nav button routes={ROUTES} />
      </BrowserRouter>
    );
    const collapseButton = screen.getByAltText('hid-nav');
    expect(collapseButton).toBeInTheDocument();
  });

  test('When passed the direction: row prop, Nav should  be horizontal', () => {
    view.unmount();
    view = render(
      <BrowserRouter>
        <Nav button direction="row" routes={ROUTES} />
      </BrowserRouter>
    );
    expect(document.querySelector('ul')).toHaveClass('horizontal');
  });
});
