import { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../../../components/Tooltip/Tooltip';
import MyLabel from '../../../components/Label/MyLabel';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Infosis/BuildingBlocks/Tooltip',
  component: Tooltip,
  args: {
    info: 'Soy un tooltip',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const RENDER_METHOD = (args: any) => (
  <>
    <br />
    <br />
    <MyLabel label="Hover me to find the tooltip" size="h3">
      <Tooltip {...args} />
    </MyLabel>
  </>
);

export const ToolTip: Story = {
  render: RENDER_METHOD,
};

export const LargeTextTooltip: Story = {
  render: RENDER_METHOD,
  args: {
    info: 'Un texto más largo crea un tooltip de mayor tamaño tamaño',
  },
};

export const TooltipWithLink: Story = {
  render: RENDER_METHOD,
  args: {
    link: 'https://gitlab.infosisglobal.com/frontend/storybook',
    info: 'Soy un tooltip con un link',
  },
};
