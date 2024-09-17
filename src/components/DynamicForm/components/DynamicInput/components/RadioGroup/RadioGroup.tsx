import { DynamicInputProps, Option } from '../../../../types';
import React from 'react';
import style from './radioGroup.module.css';
import useGetOptions from '../../../../../../hooks/useGetOptions';

const MyRadioGroup = ({
  data,
  handle,
  errors,
  touched,
  className,
  key,
  value,
  onBlur,
}: DynamicInputProps) => {
  const { title, options, dependentOn } = data;

  const mappableOptions = useGetOptions(options, title, value, dependentOn);

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + ' ' + style.error;
    }
  }

  return (
    <div className={`${className} ${style.radioGroup}`} key={key}>
      <label htmlFor={data.title}>{data.label}</label>
      <fieldset
        className={style.radioContainer}
        onBlur={onBlur}
        onChange={handle}
      >
        {Array.isArray(mappableOptions) ? (
          mappableOptions.map((opt: Option) => {
            return (
              <div key={opt.value}>
                <input type="radio" name={title} value={opt.value} />
                <label htmlFor={opt.title} className={style.radioLabel}>
                  {opt.label}
                </label>
              </div>
            );
          })
        ) : (
          <span>Esperando opciones...</span>
        )}
      </fieldset>
      {errors && touched && touched[title] && errors[title] && (
        <span style={{ color: 'red' }}>{String(errors[title])}</span>
      )}
    </div>
  );
};

export default MyRadioGroup;
