import React from 'react';
import style from './dynamicForm.module.css';
import { Formik, Form } from 'formik';
import DynamicInput from './components/DynamicInput/DynamicInput';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import Message from '../Message/Message';
import { getInitialValues, getFieldData, isValidJSON } from './utils/getValues';
import { buildYup } from 'schema-to-yup';
import { FormField } from './types';
import { joinClasses } from '../PopUp/utils/utils';
import { PopUpSize } from '../PopUp/PopUp';
import { SPACE, popupSizes } from '../PopUp/constants/constants';

export interface DynamicFormProps {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * Text for the main button (positive action)
   */
  button1?: string;
  /**
   * Text for the dismiss button
   */
  button2?: string;
  /**
   * JSON to be converted to inputs, labels and validations, if null or undefined, a spinner will cover the form
   */

  json?: any;
  /**
   * Function for handling the submit of the form
   */
  handleSubmit: (() => void) | ((arg?: any) => void);
  /**
   * Optional function for forms inside a colapsable component/modal to close it
   */
  close?: Function;
  /**
   *Optionas funciton for removing form data
   */
  reset?: () => void;
  /**
   *If true, the form will try to create validation rules from the JSONSChema. Defaulted to true
   */

  validate?: boolean;
  size?: PopUpSize;
}

const ErrorMessageWithCloseButton = ({
  close,
}: {
  close: Function | undefined;
}) => {
  return (
    <div className={style.errorMessage}>
      <Message
        type="error"
        message1="Hubo un error generando el formulario"
        message2="Intentá de nuevo más tarde, si el error persiste comunícate con soporte."
      />
      <Button type="secondary" label="Cerrar" onClick={close} />
    </div>
  );
};

const DynamicForm = ({
  handleSubmit,
  className = '',
  button1 = 'Crear',
  button2 = 'Cancelar',
  json = { not: 'valid' },
  close,
  validate = true,
  size,
}: DynamicFormProps) => {
  if (!json) return <Spinner />;
  if (!isValidJSON(json)) return <ErrorMessageWithCloseButton close={close} />;
  return (
    <Formik
      initialValues={getInitialValues(json)}
      onSubmit={handleSubmit as (arg?: any) => void}
      validateOnBlur
      validationSchema={validate ? buildYup(json) : null}
    >
      {({
        dirty,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        resetForm,
        values,
      }) => (
        <Form className={`${style.form} ${className}`}>
          <div className={style.formScroll}>
            {getFieldData(json).map((ele: FormField, idx: number) => (
              <DynamicInput
                className={joinClasses(
                  style['formField'],
                  style[
                    size && size === popupSizes.mobile
                      ? popupSizes.mobile
                      : SPACE
                  ]
                )}
                data={ele}
                key={idx}
                handle={handleChange as () => void}
                onBlur={handleBlur as () => void}
                errors={errors}
                touched={touched}
                validateOnBlur
                validateOnMount
                value={values}
                size={size}
              />
            ))}
          </div>
          <div className={style.formBtns}>
            <Button
              borderRadius={10}
              size="larger"
              label={button2}
              type="secondary"
              onClick={() => {
                close && close({ id: '', summary: '' });
                resetForm();
              }}
            />
            <Button
              borderRadius={10}
              size="larger"
              label={button1}
              type={isValid && dirty ? 'submit' : 'disabled'}
              onClick={() => {
                handleSubmit(values);
                resetForm();
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
