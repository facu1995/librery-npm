import '@testing-library/jest-dom';
import PopUp from './PopUp';
import React from 'react';
import { RenderResult, render, screen } from '@testing-library/react';
import { MOCK_ITEMS } from '../../stories/assets/mockItems';

describe('<PopUp/>', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <PopUp isOpen={true} isList={false} title="Test PopUp">
        <h1>Test children rendering</h1>
      </PopUp>
    );
  });

  test('PopUp renders children', () => {
    expect(component.container).toHaveTextContent('Test children rendering');
  });

  test('Should not render children when isGallery, and render a card for every item passed in props', () => {
    component = render(
      <PopUp
        isOpen={true}
        isGallery={true}
        title="Test PopUp"
        listItem={MOCK_ITEMS}
      >
        <h1>Test children rendering</h1>
      </PopUp>
    );
    expect(component.container).not.toHaveTextContent(
      'Test children rendering'
    );
    expect(component.container.querySelector('.popupCard')).toBeInTheDocument();
  });

  test('Should be open or closed according to isOpen prop', async () => {
    component.unmount();
    const { rerender } = render(
      <PopUp isOpen={true} isList={false} title="Test PopUp" />
    );
    expect(screen.getByTestId('popup-container')).toHaveClass('true');

    rerender(<PopUp isOpen={false} isList={false} title="Test PopUp" />);
    expect(screen.getByTestId('popup-container')).toHaveClass('false');
  });
});
