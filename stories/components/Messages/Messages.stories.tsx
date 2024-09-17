import { Meta, StoryObj } from '@storybook/react';
import Message from '../../../components/Message/Message';

const meta: Meta<typeof Message> = {
  title: 'Infosis/BuildingBlocks/Messages',
  component: Message,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Message>;

export const ErrorMessage: Story = {
  args: {
    type: 'error',
    message1: 'Oops, hubo un error',
    message2: 'Intentá de nuevo más tarde',
  },
};

export const ConfirmMessage: Story = {
  args: {
    type: 'confirm',
    message1: '¿Estás seguro de continuar?',
    message2: 'Los cambios no guardados se perderán',
  },
};

export const SuccessMessage: Story = {
  args: {
    type: 'success',
    message1: 'Cambios realizados con éxito',
  },
};
