import '@testing-library/jest-dom';
import DynamicInput from '../../DynamicInput';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const PasswordData = {
  data: {
    title: 'password',
    label: 'Mi input dinámico',
    placeholder: 'Soy un placeholder',
    type: 'password',
    options: [],
    default: '',
  },
};

describe('<Password />', () => {
  beforeEach(() => {
    render(<DynamicInput data={PasswordData} key={0} handle={() => {}} />);
  });

  test('Content of password should be hidden by default, and visible when the button is clicked', () => {
    const { placeholder } = PasswordData.data;
    const passwordInput = screen.getByPlaceholderText(placeholder);
    const typeButton = screen.getByAltText('show-pass');
    userEvent.type(passwordInput, 'Password');
    expect(passwordInput).toHaveAttribute('type', 'password');
    fireEvent.click(typeButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });
});
