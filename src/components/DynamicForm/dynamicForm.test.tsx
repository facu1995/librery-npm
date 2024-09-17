import '@testing-library/jest-dom';
import DynamicValidationForm from './DynamicForm';
import {
  RenderResult,
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react';
import JSON_FORM_CHECKBOX from './utils/JSON_FORM_CHECKBOX.json';
import FILTER_JSON from '../FilterControls/utils/FILTER_JSON.json';
import JSON_FORM_RULES from './utils/JSON_FORM_RULES.json';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('<DynamicForm />', () => {
  let component: RenderResult;

  const submitMock = jest.fn();
  const buttonOneText = 'Crear';
  const buttonTwoText = 'Cancelar';

  beforeEach(async () => {
    await act(async () => {
      component = render(
        <DynamicValidationForm
          handleSubmit={submitMock}
          json={JSON_FORM_RULES}
        />
      );
    });
  });

  test('Buttons have button1 and button2 text', () => {
    const buttons = component.container.querySelectorAll('button');
    const cancelButton = buttons[0];
    const submitButton = buttons[1];
    expect(cancelButton).toHaveTextContent(buttonTwoText);
    expect(submitButton).toHaveTextContent(buttonOneText);
  });

  test('submitMock should be called on submit button click', async () => {
    component = render(
      <DynamicValidationForm
        handleSubmit={submitMock}
        button1={'Aplicar'}
        button2={'Borrar'}
        json={FILTER_JSON}
      />
    );
    const submitButton = screen.getByText('Aplicar');
    submitButton.onclick = submitMock;
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitMock).toHaveBeenCalledTimes(1);
    });
  });

  test('form with no json should render a spinner, and should not render it when json is loaded', async () => {
    component = render(
      <DynamicValidationForm
        handleSubmit={submitMock}
        button1={'Aplicar'}
        button2={'Borrar'}
        json={null}
      />
    );
    const spinner = component.container.querySelector('.loader');

    expect(spinner).toBeInTheDocument();

    component = render(
      <DynamicValidationForm
        handleSubmit={submitMock}
        button1={'Aplicar'}
        button2={'Borrar'}
        json={JSON_FORM_CHECKBOX}
      />
    );

    const newSpinner = component.container.querySelector('circle');

    await waitFor(() => {
      expect(newSpinner).not.toBeInTheDocument();
    });
  });

  test('Should display error message if JSON is not a valid schema', () => {
    component.unmount();
    component = render(
      <DynamicValidationForm
        handleSubmit={submitMock}
        json={{ not: 'valid' }}
      />
    );
    const errorMessage = screen.getByText(
      'Hubo un error generando el formulario'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('Should preview uploaded files and be able to delete them', async () => {
    const FILE_NAME_1 = 'testPicture.png';
    const MOCKED_FILE_1 = new File(['testPicture'], FILE_NAME_1, {
      type: 'image/png',
    });

    const FILE_NAME_2 = 'testPictureTwo.png';
    const MOCKED_FILE_2 = new File(['testPictureTwo'], FILE_NAME_2, {
      type: 'image/png',
    });

    const uploadInput = component.container.querySelector('input[type="file"]');

    await act(async () => {
      userEvent.upload(uploadInput as HTMLElement, [
        MOCKED_FILE_1,
        MOCKED_FILE_2,
      ]);
    });

    expect(component.container).toHaveTextContent(FILE_NAME_1);
    expect(component.container).toHaveTextContent(FILE_NAME_2);

    const deleteButton = screen.getAllByAltText('borrar');

    await act(async () => {
      userEvent.click(deleteButton[0]);
    });

    expect(component.container).not.toHaveTextContent(FILE_NAME_1);
  });

  test('Form should reset on clicking cancel button', async () => {
    const textAreaInput = component.container.querySelector('textarea');
    const TEST_WRITING = 'test writting on input';
    const cancelButton = component.container.querySelector('button');
    await act(async () => {
      userEvent.type(textAreaInput!, TEST_WRITING);
    });
    expect(textAreaInput).toHaveValue(TEST_WRITING);
    await act(async () => {
      userEvent.click(cancelButton!);
    });
    expect(textAreaInput).toHaveValue('');
  });
});
