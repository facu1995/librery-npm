import React, { useState } from 'react';
import style from './Password.module.css';
import opened from './assets/openEye.svg';
import closed from './assets/closedEye.svg';
import { DynamicInputProps } from '../../../../types';

const Password = ({
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

  const [type, setType] = useState<'password' | 'text'>('password');

  const changeInputType = () =>
    type === 'text' ? setType('password') : setType('text');

  return (
    <div className={`${style.inputDiv} ${className}`} key={key}>
      <label htmlFor={data.title}>{data.label}</label>
      <input
        type={type}
        placeholder={data.placeholder}
        value={value && value[title]}
        name={data.title}
        onBlur={onBlur}
        onChange={handle}
      />
      <img
        src={type === 'password' ? opened : closed}
        alt="show-pass"
        onClick={changeInputType}
      />
      {errors && touched && touched[title] && errors[title] && (
        <span id="error" style={{ color: 'red' }}>
          {String(errors[title])}
        </span>
      )}
    </div>
  );
};

export default Password;
