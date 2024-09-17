import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Nav from '../../../components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Nav> = {
  title: 'Infosis/Layout/Nav',
  component: Nav,
  args: {
    shadow: true,
  },
};

export default meta;

const RENDER_METHOD = (args: any) => {
  return (
    <>
      <BrowserRouter>
        <Nav {...args} />
      </BrowserRouter>
    </>
  );
};

type Story = StoryObj<typeof Nav>;

export const SideNav: Story = {
  render: RENDER_METHOD,
};

export const CollapsableSideNav: Story = {
  render: RENDER_METHOD,
  args: {
    button: true,
  },
};

export const HorizontalNav: Story = {
  render: RENDER_METHOD,
  args: {
    direction: 'row',
  },
};

export const CollapsableHorizontalNav: Story = {
  render: RENDER_METHOD,
  args: {
    direction: 'row',
    button: true,
  },
};
