// import '@testing-library/jest-dom';
// import Button from './Button';
// import { RenderResult, render } from '@testing-library/react';
// import React from 'react';

// describe('<Button />', () => {
//   let component: RenderResult;
//   let label: string = 'Test label';

//   beforeEach(() => {
//     component = render(<Button label={label} />);
//   });

//   test('Button renders label text', () => {
//     expect(component.container).toHaveTextContent(label);
//   });

//   test('Button is disabled if type is disabled', () => {
//     component = render(<Button label={label} type="disabled" />);
//     const button = component.container.querySelector('button');
//     expect(button).not.toBeEnabled();
//   });

//   test('Button has border-radius as passed through prop', () => {
//     const borderRadiusAmount = 50;
//     component = render(
//       <Button label={label} borderRadius={borderRadiusAmount} />
//     );
//     const button = component.container.querySelector('button');
//     expect(button).toHaveStyle(`border-radius : ${borderRadiusAmount}px`);
//   });
// });
