import { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../../components';

const meta: Meta<typeof Toast> = {
  title: 'Infosis/BuildingBlocks/Toast/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const TestToast: Story = {
  args: {
    type: 'test',
    text: 'Mensaje informativo del toast',
    buttonText: 'Confirmar',
  },
};

export const SuccessToast: Story = {
  args: {
    type: 'success',
    text: 'Subcategoria creada con exito',
    buttonText: 'Ok',
  },
};

export const ErrorToast: Story = {
  args: {
    type: 'error',
    text: 'El producto no se pudo eliminar',
    buttonText: 'Reintentar',
  },
};
