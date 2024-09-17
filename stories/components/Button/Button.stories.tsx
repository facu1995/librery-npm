import { Meta, StoryObj } from '@storybook/react';
import Button from '../../../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Infosis/BuildingBlocks/Button/Button',
  component: Button,
  argTypes: {
    size: { control: 'select' },
    type: { control: 'select' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    hover: true,
    borderRadius: 30,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
  },
};

export const Desabled: Story = {
  args: {
    label: 'Disabled',
    type: 'disabled',
  },
};
