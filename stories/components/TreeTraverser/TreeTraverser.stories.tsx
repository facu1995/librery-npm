import { Meta, StoryObj } from '@storybook/react';
import { TreeTraverser } from '../../../components';
import volume from '../../../components/TreeTraverser/resources/volume.json';

const meta: Meta<typeof TreeTraverser> = {
  title: 'Infosis/BuildingBlocks/TreeTraverser/TreeTraverser',
  component: TreeTraverser,
  args: {
    data: [...volume.categories, ...volume.favorites],
    fatherProp: 'parent',
  },
};

export default meta;

type Story = StoryObj<typeof TreeTraverser>;

export const TreeTraverserExample: Story = {
  args: {
    data: [...volume.categories, ...volume.favorites],
    fatherProp: 'parent',
  },
};
