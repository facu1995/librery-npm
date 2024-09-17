import '@testing-library/jest-dom';
import Collapse from './Collapse';
import React from 'react';
import { render } from '@testing-library/react';

describe('< Collapse />', () => {
  test('Collapse should render its children', () => {
    const component = render(
      <Collapse isOpen={true}>
        <h1>soy el children</h1>
      </Collapse>
    );
    expect(component.container).toHaveTextContent('soy el children');
  });
});
