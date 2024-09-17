import { FormField } from '../types';

export const getInitialValues = (json: any) => {
  let initialValues: any = {};
  const { properties } = json;
  if (!properties) {
    throw new Error('el JSON ingresado no es válido');
  }
  Object.values(properties).forEach((field: any) => {
    initialValues[field.data.title] = field.data.default;
  });
  return initialValues;
};

export const getFieldData = (json: any): Array<FormField> => {
  const { properties } = json;
  if (!properties) {
    throw new Error('el JSON ingresado no es válido');
  }
  return Object.values(properties);
};

export const isValidJSON = (json: any) => {
  const { properties, $schema } = json;
  if (properties && $schema) {
    return true;
  } else {
    return false;
  }
};

export const fetchOption = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('ERROR FETCHIN OPTIONS');
  }
  return await response.json();
};

export const handleFetchError = (error: any, setter: any) => {
  // eslint-disable-next-line no-console
  console.error('There was a problem fetching the options' + error);
  setter([{ label: 'Hubo un error', value: '' }]);
};
