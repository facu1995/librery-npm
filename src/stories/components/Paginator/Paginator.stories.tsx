import { Meta, StoryObj } from '@storybook/react';
import Paginator from '../../../components/Paginator/Paginator';

const meta: Meta<typeof Paginator> = {
  title: 'Infosis/BuildingBlocks/Paginator/Paginator',
  component: Paginator,
  args: {
    handleChange: (param: number) => {
      alert(param);
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paginator>;

export const PaginatorInput: Story = {};
