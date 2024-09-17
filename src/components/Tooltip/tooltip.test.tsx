import '@testing-library/jest-dom';
import Tooltip from './Tooltip';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';

describe('Tooltip', () => {
  let component: RenderResult;
  const TEST_TEXT = 'Testing tooltip';
  const TEST_LINK = 'https://gitlab.infosisglobal.com/frontend/storybook';

  test('Component should render content of info prop as text', () => {
    component = render(<Tooltip info={TEST_TEXT} />);
    expect(component.container).toHaveTextContent(TEST_TEXT);
  });

  test('Component should render a <a> element when passed a link prop', () => {
    component = render(<Tooltip info={TEST_TEXT} link={TEST_LINK} />);
    const anchorElement = component.container.querySelector('a');
    expect(anchorElement).toBeInTheDocument();
  });
});
