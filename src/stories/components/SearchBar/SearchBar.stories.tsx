import { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '../../../components';

const meta: Meta<typeof SearchBar> = {
  title: 'Infosis/BuildingBlocks/SearchBar/SearchBar',
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Search: Story = {};
