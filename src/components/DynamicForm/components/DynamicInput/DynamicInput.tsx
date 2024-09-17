import { FormField } from '../../types';
import { FormikErrors, FormikTouched } from 'formik';
import styles from './dynamicInput.module.css';
import React from 'react';
import TextArea from './components/TextArea/TextArea';
import MySelect from './components/Select/Select';
import DropArea from './components/DropArea/DropArea';
import RadioGroup from './components/RadioGroup/RadioGroup';
import DatePicker from './components/DatePicker/DatePicker';
import CheckBox from './components/CheckBox/CheckBox';
import Password from './components/Password/Password';
import Input from './components/Input/Input';
import { PopUpSize } from '../../../PopUp/PopUp';

export interface DynamicInputProps {
  /**
   * Optional classname to customize input's style
   */
  className?: string;
  /**
   * Object containing type of input, posible values, validations, etc.
   */
  data: FormField | any;
  /**
   * If form needs validation, pass a Formik errors object to display errors
   */
  errors?: FormikErrors<{ [field: string]: any }>;
  /**
   * AN object containing all values from the Formik Context
   */
  value?: Object;
  /**
   * On change handler for using the inputted data
   */
  handle: (arg0: any) => void;
  /**
   * Function to run onBlur, mostly useful for on the fly validations
   */
  onBlur?: () => void;
  /**
   * For validations, pass a Formik touched object to know if the user has interacted with the input
   */
  touched?: FormikTouched<any>;
  /**
   * If true, input will be validated onBlur with the onBlur handler
   */
  validateOnBlur?: boolean;
  /**
   * If true, form will be validated on render
   */
  validateOnMount?: boolean;

  key: any;
  size?: PopUpSize;
}

const DynamicInput = (props: DynamicInputProps) => {
  const { data } = props.data;

  const dynamicProps = {
    ...props,
    data: data,
  };

  if (data.type === 'textarea') {
    return <TextArea {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'select') {
    return <MySelect {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'file') {
    return <DropArea {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'radio') {
    return <RadioGroup {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'date') {
    return <DatePicker {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'checkbox') {
    return <CheckBox {...dynamicProps} className={styles.dinamic} />;
  } else if (data.type === 'password') {
    return <Password {...dynamicProps} className={styles.dinamic} />;
  } else {
    return <Input {...dynamicProps} className={styles.dinamic} />;
  }
};

export default DynamicInput;
