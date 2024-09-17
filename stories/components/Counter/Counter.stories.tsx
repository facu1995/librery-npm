import { Meta, StoryObj } from '@storybook/react';
import Counter from '../../../components/Counter/Counter';

const meta: Meta<typeof Counter> = {
  title: 'Infosis/BuildingBlocks/Counter/Counter',
  component: Counter,
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  args: {
    color: 'principal',
    label: 'Esperando resolución',
    amount: 0,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Esperando respuesta',
    amount: 3,
  },
};
