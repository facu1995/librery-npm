import { Meta, StoryObj } from '@storybook/react';
import { DynamicInput } from '../../../components';
import { Formik } from 'formik';
import React from 'react';

const meta: Meta<typeof DynamicInput> = {
  title: 'Infosis/BuildingBlocks/Inputs',
  component: DynamicInput,
  args: {
    data: {
      data: {
        title: 'Input Text',
        label: 'Mi input dinámico',
        placeholder: 'Soy un placeholder',
        type: 'text',
        options: [],
        default: '',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DynamicInput>;

const RENDER_METHOD = (args: any) => {
  return (
    <Formik
      initialValues={{
        note: 'This components is always rendered withing a Formik Form, refer to the DynamicForm and DynamicInput docs',
        attachedFiles: [],
        selectedValue: '',
      }}
      onSubmit={(val) => {
        alert(JSON.stringify(val));
      }}
    >
      {({ values }) => <DynamicInput {...args} value={values} />}
    </Formik>
  );
};

export const BasicTextInput: Story = {
  render: RENDER_METHOD,
};

export const SelectInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'selectedValue',
        label: 'Input dinámico',
        placeholder: 'Selecciona una opción',
        type: 'select',
        options: [
          { label: 'Selecciona una opción', value: '' },
          { label: 'Opción 1', value: '1' },
          { label: 'Opción 2', value: '2' },
          { label: 'opción 3', value: '3' },
        ],
        default: '',
      },
    },
  },
};

export const SelectWithFetchInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'selectedValue',
        label:
          'Un select que recibe un string en vez de un arreglo de opciones, intentará usar ese string como una URL donde fetchear las opciones. Ante un error, informa.',
        placeholder: 'Selecciona una opción',
        type: 'select',
        options: 'urldelasopciones',
        default: '',
      },
    },
  },
};

export const DropFilesInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'attachedFiles',
        label: 'Adjunto',
        placeholder: '',
        type: 'file',
        options: [],
        default: [],
      },
    },
  },
};

export const RadioInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'satisfaction',
        label: '¿Qué tan satisfecho está con el servicio? *',
        placeholder: '',
        type: 'radio',
        options: [
          { label: 'Insatisfecho', value: '1' },
          { label: 'Algo satisfecho', value: '2' },
          { label: 'Satisfecho', value: '3' },
          { label: 'Muy satisfecho', value: '4' },
          { label: 'Super satisfecho', value: '5' },
        ],
        default: 'Satisfecho',
      },
    },
  },
};

export const TextAreaInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'experience',
        label: 'Cuéntenos su experiencia usando esta libería',
        placeholder: 'Tu experiencia aquí...',
        type: 'textarea',
        options: [],
        default: '',
      },
    },
  },
};

export const PasswordInput: Story = {
  render: RENDER_METHOD,
  args: {
    data: {
      data: {
        title: 'password',
        label: 'Ingrese su contraseña',
        placeholder: 'Contraseña...',
        type: 'password',
        options: [],
        default: '',
      },
    },
  },
};
