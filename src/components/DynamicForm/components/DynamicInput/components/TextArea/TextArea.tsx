import React from 'react';
import style from '../../../../dynamicForm.module.css';
import { DynamicInputProps } from '../../../../types';
import { joinClasses } from '../../../../../PopUp/utils/utils';
import {
  EMPTY,
  SPACE,
  popupSizes,
} from '../../../../../PopUp/constants/constants';

const TextArea = ({
  data,
  handle,
  errors,
  touched,
  className,
  onBlur,
  value,
  key,
  size,
}: DynamicInputProps) => {
  const { title } = data;

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + SPACE + style.error;
    }
  }

  return (
    <div
      className={joinClasses(
        style['formField'],
        style[size && size === popupSizes.mobile ? popupSizes.mobile : SPACE],
        className || EMPTY
      )}
      key={key}
    >
      <label htmlFor={data.title}>{data.label}</label>
      <textarea
        value={value && value[title]}
        placeholder={data.placeholder}
        onChange={handle}
        name={data.title}
        onBlur={onBlur}
      />
      {errors && touched && errors[title] && touched[title] && (
        <span style={{ color: 'red' }}>{String(errors[title])}</span>
      )}
    </div>
  );
};

export default TextArea;
