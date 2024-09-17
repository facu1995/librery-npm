import { Meta, StoryObj } from '@storybook/react';
import TicketControlPage from '../../../components/TicketControlPage/TicketControlPage';

const meta: Meta<typeof TicketControlPage> = {
  title: 'Infosis/Pages/TicketPage/TicketPage',
  component: TicketControlPage,
};

export default meta;

type Story = StoryObj<typeof TicketControlPage>;

export const TicketsPage: Story = {};
