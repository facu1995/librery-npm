import { Meta, StoryObj } from '@storybook/react';
import FilterFields from '../../../components/FilterFields/FilterFields';
import FILTER_JSON from '../../../components/FilterControls/utils/FILTER_JSON.json';

const meta: Meta<typeof FilterFields> = {
  title: 'Infosis/BuildingBlocks/Forms',
  component: FilterFields,
};

export default meta;

type Story = StoryObj<typeof FilterFields>;

export const FilterOptions: Story = {
  args: {
    json: FILTER_JSON,
    handleSubmit: () => alert('submiting form'),
    close: () => {
      alert('closing collapsable options');
    },
  },
};
