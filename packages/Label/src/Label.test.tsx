import '@testing-library/jest-dom';
import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import Label from './MyLabel';

describe('<Label />', () => {
  let component: RenderResult;
  let label: string = 'Test label';

  beforeEach(() => {
    component = render(
      <Label label={label} size={'normal'} weight={'bolder'} />
    );
  });

  test('Render Label Text', () => {
    expect(component.container).toHaveTextContent(label);
  });
});
