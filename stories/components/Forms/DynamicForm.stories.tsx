import { Meta, StoryObj } from '@storybook/react';
import DynamicForm from '../../../components/DynamicForm/DynamicForm';
import JSON_RULES from '../../../components/DynamicForm/utils/JSON_FORM_RULES.json';
import JSON_FORM_CHECKBOX from '../../../components/DynamicForm/utils/JSON_FORM_CHECKBOX.json';
import REACTIVE_JSON from '../../../components/DynamicForm/utils/REACTIVE_JSON.json';
import DOBLE_DEPENDENCY_FORM from '../../../components/DynamicForm/utils/DOBLE_DEPENDENCY_FORM.json';

const meta: Meta<typeof DynamicForm> = {
  title: 'Infosis/BuildingBlocks/Forms',
  component: DynamicForm,
  args: {
    button1: 'Crear ticket',
    button2: 'Cancelar',
    json: JSON_RULES,
    handleSubmit: (values: object) => {
      alert(JSON.stringify(values));
    },
  },
};
export default meta;

type Story = StoryObj<typeof DynamicForm>;

export const AdaptableForm: Story = {};

export const AnotherForm: Story = {
  args: {
    button1: 'Enviar',
    button2: 'Cancelar',
    json: JSON_FORM_CHECKBOX,
  },
};

export const FetchingForm: Story = {
  args: {
    json: null,
  },
};

export const ReactiveForm: Story = {
  args: {
    json: REACTIVE_JSON,
  },
};

export const DobleDependency: Story = {
  args: {
    json: DOBLE_DEPENDENCY_FORM,
  },
};
