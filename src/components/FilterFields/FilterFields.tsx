import DynamicInput from '../DynamicForm/components/DynamicInput/DynamicInput';
import { DynamicFormProps } from '../DynamicForm/DynamicForm';
import { Formik, Form } from 'formik';
import {
  getFieldData,
  getInitialValues,
  isValidJSON,
} from '../DynamicForm/utils/getValues';
import { FormField } from '../DynamicForm/types';
import Button from '../Button/Button';
import React from 'react';
import style from './filterField.module.css';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';

const FilterFields = ({
  className = '',
  json,
  handleSubmit,
  close,
  reset,
}: DynamicFormProps) => {
  if (!json) return <Spinner />;
  if (!isValidJSON(json))
    return (
      <Message
        type="error"
        message1="Hubo un error generando el formulario"
        message2="Intentá de nuevo más tarde, si el error persiste comunícate con soporte."
      />
    );
  return (
    <Formik
      initialValues={getInitialValues(json)}
      onSubmit={handleSubmit as () => void}
    >
      {({ handleChange, resetForm, values }) => (
        <Form className={`${className} ${style.filterContainer}`}>
          <div className={style.filterInputs}>
            {getFieldData(json).map((ele: FormField, idx: number) => (
              <DynamicInput
                data={ele}
                key={idx}
                handle={handleChange}
                value={values}
              />
            ))}
          </div>
          <div className={style.filterBtns}>
            <Button
              label="Aplicar"
              borderRadius={5}
              size="larger"
              onClick={() => {
                close && close!();
                handleSubmit(values);
              }}
            />
            <Button
              label="Borrar"
              type="secondary"
              borderRadius={5}
              size="larger"
              onClick={() => {
                reset && reset();
                resetForm();
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterFields;
