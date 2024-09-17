import { DynamicInputProps } from '../../../../types';
import { useFormikContext } from 'formik';
import React from 'react';
import useGetOptions from '../../../../../../hooks/useGetOptions';
import style from '../../../../dynamicForm.module.css';
import Select from 'react-select';
import { joinClasses } from '../../../../../PopUp/utils/utils';
import {
  EMPTY,
  SPACE,
  popupSizes,
} from '../../../../../PopUp/constants/constants';

const MySelect = ({
  data,
  errors,
  touched,
  value,
  className,
  key,
  size,
}: DynamicInputProps): JSX.Element | null => {
  let { title, options, dependentOn } = data;

  const mappableOptions = useGetOptions(options, title, value, dependentOn);

  const { setFieldValue, setFieldTouched } = useFormikContext();

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + ' ' + style.error;
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
      <Select
        name={data.title}
        options={
          typeof mappableOptions === 'string'
            ? [{ label: 'Esperando opciones...', value: '0' }]
            : (mappableOptions as [])
        }
        onChange={(e: any) => {
          e && e.value && setFieldValue(title, e.value);
        }}
        onBlur={() => {
          setFieldTouched(title, true);
        }}
        value={
          value && value[title].trim() === ''
            ? { value: '', label: data.placeholder }
            : { value: [value.title], label: value[title] }
        }
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? '#546DFE' : '#DCDDE3',
            borderWidth: state.isFocused ? '1.5px' : '1.5px',
            fontWeight: 'light',
            height: '3.4rem',
            borderRadius: '2px',
            width: '245px',
            cursor: 'pointer',
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: '300px',
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            height: '3.4rem',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: value[title].trim() === '' ? '#8e8e8e' : 'black',
            fontSize: '1rem',
            fontWeight: 'light',
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            padding: '0px 20px',
          }),
        }}
      />
      {errors && touched && touched[title] && errors[title] && (
        <span style={{ color: 'red' }}>{String(errors[title])}</span>
      )}
    </div>
  );
};

export default MySelect;
