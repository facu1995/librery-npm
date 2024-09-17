import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Collapse } from '../../../components';
import { DynamicForm } from '../../../components';
import JSON from '../../../components/DynamicForm/utils/JSON_FORM_CHECKBOX.json';

const meta: Meta<typeof Collapse> = {
  title: 'Infosis/BuildingBlocks/Collapse/Collapse',
  component: Collapse,
  args: {
    style: {
      backgroundColor: '#F5F5F5',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const CollapseExample: Story = {
  render: (args) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div
        style={{
          backgroundColor: '#DCDCDC',
          minHeight: '100vh',
        }}
      >
        <button
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            backgroundColor: 'blue',
            width: '3rem',
            aspectRatio: '1/1',
            borderRadius: '50%',
            position: 'absolute',
            margin: '1rem',
            fontSize: '2rem',
            fontWeight: 'bolder',
            color: 'white',
          }}
        >
          +
        </button>
        <Collapse {...args} isOpen={open}>
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid grey',
              borderRadius: '3px',
              margin: '2rem auto',
              width: '80%',
              padding: '3rem',
            }}
          >
            <DynamicForm handleSubmit={() => {}} json={JSON} />
          </div>
        </Collapse>
      </div>
    );
  },
};
