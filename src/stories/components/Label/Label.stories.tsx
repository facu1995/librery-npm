import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../../components';
import React from 'react';

const meta: Meta<typeof Label> = {
  title: 'Infosis/BuildingBlocks/Label/Label',
  component: Label,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

const RENDER_METHOD = (args: any) => {
  return (
    <>
      <Label {...args} />
      <br />
      <br />
      <br />
      <Label {...args} isImportant label="Importante" />
    </>
  );
};

export const Basic: Story = {
  render: RENDER_METHOD,
  args: {
    label: 'Demo Label',
    size: 'h1',
    allCaps: false,
  },
};

export const AllCaps: Story = {
  render: RENDER_METHOD,
  args: {
    label: 'Upper Label',
    size: 'h1',
    allCaps: true,
  },
};

export const ColorizedBackground: Story = {
  render: RENDER_METHOD,
  args: {
    label: 'Color Label',
    size: 'h1',
    backgroundColor: '#47D1A0',
    color: '#FFFF',
  },
};
