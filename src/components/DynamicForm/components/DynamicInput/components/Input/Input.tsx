import { DynamicInputProps } from '../../../../types';
import React from 'react';
import style from '../../../../dynamicForm.module.css';
import styles from './input.module.css';

const MyInput = ({
  data,
  handle,
  errors,
  touched,
  className,
  value,
  key,
  onBlur,
}: DynamicInputProps) => {
  const { title } = data;

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + ' ' + style.error;
    }
  }

  return (
    <div className={`${styles.inputDiv} ${className}`} key={key}>
      <label htmlFor={data.title}>{data.label}</label>
      <input
        placeholder={data.placeholder}
        value={value && value[title]}
        name={data.title}
        onBlur={onBlur}
        onChange={handle}
      />
      {errors && touched && touched[title] && errors[title] && (
        <span id="error" style={{ color: 'red' }}>
          {String(errors[title])}
        </span>
      )}
    </div>
  );
};

export default MyInput;
