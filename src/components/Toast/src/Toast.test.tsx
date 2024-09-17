import '@testing-library/jest-dom';
import Toast, { ToastProps } from './Toast';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import confirmIcon from './assets/confirm.svg';

describe('< Toast Success />', () => {
  let component: RenderResult;
  let toastSuccessProps: ToastProps = {
    type: 'success',
    text: 'Su solicitud se ha procesado con exito',
    buttonText: 'Ok',
  };

  beforeEach(() => {
    component = render(<Toast {...toastSuccessProps} />);
  });

  test('Toast checks if exists success message/text in the component', () => {
    expect(component.getByText(toastSuccessProps.text)).toBeInTheDocument();
  });

  test('Toast renders success message/text', () => {
    expect(component.container).toHaveTextContent(toastSuccessProps.text);
  });

  test('Success toast should display message and label as in props', () => {
    const message = component.container.querySelector('span');
    const label = component.container.querySelector('button');
    const icon = component.container.querySelector('img');
    const iconSrc: any = icon?.src.split('/');
    expect(message?.textContent).toBe(toastSuccessProps.text);
    expect(label?.textContent).toBe(toastSuccessProps.buttonText);
    expect(iconSrc[iconSrc.length - 1]).toBe(checkIcon);
  });

  test('Verify success class in container', () => {
    const toastContainer = component.container.querySelector('.container');
    expect(toastContainer).toHaveClass('success');
  });
});

describe('< Toast Error />', () => {
  let component: RenderResult;
  let toastErrorProps: ToastProps = {
    type: 'error',
    text: 'Su solicitud no se ha podido procesar',
    buttonText: 'Reintentar',
  };

  beforeEach(() => {
    component = render(<Toast {...toastErrorProps} />);
  });
  test('Toast checks if exists success message/text in the component', () => {
    expect(component.getByText(toastErrorProps.text)).toBeInTheDocument();
  });

  test('Toast renders success message/text', () => {
    expect(component.container).toHaveTextContent(toastErrorProps.text);
  });
  test('Success toast should display message and label as in props', () => {
    const message = component.container.querySelector('span');
    const label = component.container.querySelector('button');
    const icon = component.container.querySelector('img');
    const iconSrc: any = icon?.src.split('/');
    expect(message?.textContent).toBe(toastErrorProps.text);
    expect(label?.textContent).toBe(toastErrorProps.buttonText);
    expect(iconSrc[iconSrc.length - 1]).toBe(errorIcon);
  });

  test('Verify error class in container', () => {
    const toastContainer = component.container.querySelector('.container');
    expect(toastContainer).toHaveClass('error');
  });
});

describe('< Toast Customizable />', () => {
  let component: RenderResult;
  let toastCustomizableProps: ToastProps = {
    type: 'test',
    text: 'Mensaje Customizable',
    buttonText: 'Consultar',
    color: 'lightblue',
  };
  beforeEach(() => {
    component = render(<Toast {...toastCustomizableProps} />);
  });
  test('Toast checks if exists success message/text in the component', () => {
    expect(
      component.getByText(toastCustomizableProps.text)
    ).toBeInTheDocument();
  });
  test('Success toast should display message and label as in props', () => {
    const message = component.container.querySelector('span');
    const label = component.container.querySelector('button');
    const icon = component.container.querySelector('img');
    const iconSrc: any = icon?.src.split('/');
    expect(message?.textContent).toBe(toastCustomizableProps.text);
    expect(label?.textContent).toBe(toastCustomizableProps.buttonText);
    expect(iconSrc[iconSrc.length - 1]).toBe(confirmIcon);
  });
  test('Verify customizable styles in container', () => {
    const toastContainer = component.container.querySelector('.container');
    expect(toastContainer).toHaveStyle(
      `background-color: ${toastCustomizableProps.color}`
    );
  });
});
