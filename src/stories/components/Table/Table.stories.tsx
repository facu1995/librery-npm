import { Meta, StoryObj } from '@storybook/react';
import Table from '../../../components/Table/Table';

const meta: Meta<typeof Table> = {
  title: 'Infosis/BuildingBlocks/Table/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const TableProduct: Story = {
  args: {
    listItem: [
      {
        code: '1',
        description: 'DESCRIPTION 1 ',
        shortDescription: 'D1',
        name: 'Product One',
      },
      {
        code: '2',
        description: 'DESCRIPTION 2 ',
        shortDescription: 'D2',
        name: 'Product Two',
      },
      {
        code: '3',
        description: 'DESCRIPTION 3 ',
        shortDescription: 'D3',
        name: 'Product Three',
      },
      {
        code: '4',
        description: 'DESCRIPTION 4 ',
        shortDescription: 'D4',
        name: 'Product Four',
      },
      {
        code: '5',
        description: 'DESCRIPTION 5 ',
        shortDescription: 'D5',
        name: 'Product Five',
      },
      {
        code: '6',
        description: 'DESCRIPTION 6 ',
        shortDescription: 'D6',
        name: 'Product Six',
      },
    ],
    listHeaderItem: [
      { idHeader: '1', descriptionHeader: 'CODIGO' },
      { idHeader: '2', descriptionHeader: 'NOMBRE' },
      { idHeader: '2', descriptionHeader: 'CODIGO DE PRODUCTO' },
    ],
    onClick: (param: any) => {
      const msg = document.createElement('p');
      msg.setAttribute('class', 'test');
      msg.textContent = `Seleccionaste: ${param?.name}`;
      document.querySelector('#root')?.appendChild(msg);
      setTimeout(() => {
        if (document.querySelector('.test')) {
          document.querySelector('#root')?.removeChild(msg);
        }
      }, 2000);
    },
  },
};
