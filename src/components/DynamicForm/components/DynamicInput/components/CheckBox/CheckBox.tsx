import React from 'react';
import styles from './checkBox.module.css';
import { DynamicInputProps } from '../../../../types';

const MyCheckBox = ({
  data,
  errors,
  touched,
  className,
  handle,
  value,
  key,
  onBlur,
}: DynamicInputProps) => {
  const { title } = data;

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + ' ' + styles.error;
    }
  }

  return (
    <div className={`${className} ${styles.checkbox}`} key={key}>
      <label htmlFor={title}>{data.label}</label>
      <input
        type="checkbox"
        className={styles.box}
        name={data.title}
        defaultChecked={Boolean(data.default)}
        onChange={handle}
        onBlur={onBlur}
        value={value && value[title]}
      />
      {errors && touched && touched[title] && errors[title] && (
        <span style={{ color: 'red' }}>{String(errors[title])}</span>
      )}
    </div>
  );
};

export default MyCheckBox;
