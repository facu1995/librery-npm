import { Meta, StoryObj } from '@storybook/react';
import Header from '../../../components/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Infosis/Layout/Header/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const BasicHeader: Story = {};
