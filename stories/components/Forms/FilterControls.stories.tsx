import { Meta, StoryObj } from '@storybook/react';
import FilterControls from '../../../components/FilterControls/FilterControls';

const meta: Meta<typeof FilterControls> = {
  title: 'Infosis/BuildingBlocks/Forms',
  component: FilterControls,
};

export default meta;

type Story = StoryObj<typeof FilterControls>;

export const CompoundFilter: Story = {
  args: {
    handle: () => {
      alert('submitting');
    },
  },
};
