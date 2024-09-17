import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components';
import { MOCK_ITEMS } from '../../assets/mockItems';
import { MOCK_ITEMS_HEADER } from '../../assets/mockItemsHeader';
import { modalStatus } from '../../../components/PopUp/constants/constants';
import PopUp from '../../../components/PopUp/PopUp';
import FORM_JSON from '../../../components/DynamicForm/utils/JSON_FORM_RULES.json';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import Message from '../../../components/Message/Message';

const meta: Meta<typeof PopUp> = {
  title: 'Infosis/BuildingBlocks/PopUp',
  component: PopUp,
  args: {
    title: 'Basic PopUp',
    children: <p>I'm the body of a regular popUp</p>,
    isOpen: false,
    size: 'mobile',
  },
  argTypes: {
    size: { control: 'select' },
    buttonsAmount: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof PopUp>;

const RENDER_METHOD = (args: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        minHeight: '60vh',
      }}
    >
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        label={open ? modalStatus.close : modalStatus.open}
      />
      <PopUp
        {...args}
        isOpen={open}
        setIsOpen={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
};

export const BasicPopUp: Story = {
  render: RENDER_METHOD,
};

export const PopUpWithList: Story = {
  render: RENDER_METHOD,
  args: {
    title: 'Listed PopUp',
    listItem: MOCK_ITEMS,
    isList: true,
    setHeaderIdItem: MOCK_ITEMS_HEADER,
    children: <></>,
  },
};

export const PopUpWithGallery: Story = {
  render: RENDER_METHOD,
  args: {
    title: 'Gallery PopUp',
    listItem: MOCK_ITEMS,
    isGallery: true,
    children: <></>,
  },
};

export const FormPopUp: Story = {
  render: RENDER_METHOD,
  args: {
    title: 'Form PopUp',
    children: (
      <DynamicForm
        json={FORM_JSON}
        handleSubmit={(val) => {
          alert(val);
        }}
        size="mobile"
      />
    ),
  },
};

export const ErrorPopUp: Story = {
  render: RENDER_METHOD,
  args: {
    title: 'Error PopUp',
    children: <Message type="error" message1="Oops! Hubo un error" />,
    buttonsAmount: 2,
  },
};

export const ConfirmPopUp: Story = {
  render: RENDER_METHOD,
  args: {
    title: 'Confirm PopUp',
    children: (
      <Message
        type="confirm"
        message1="¿Estás seguro de continuar?"
        message2="Los cambios no guardados se perderán"
      />
    ),
  },
};
