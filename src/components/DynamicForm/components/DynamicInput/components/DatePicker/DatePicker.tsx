import { useFormikContext } from 'formik';
import { DynamicInputProps } from '../../../../types';
import React, { useRef, useState } from 'react';
import style from './datePicker.module.css';
import format from 'date-fns/format';
import { DayPicker } from 'react-day-picker';
import date from './assets/date.svg';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

const MyDatePicker = ({
  data,
  errors,
  touched,
  className,
  value,
  key,
  onBlur,
}: DynamicInputProps) => {
  const { title } = data;

  const { setFieldValue } = useFormikContext();

  if (errors && touched) {
    if (errors[title] && touched[title]) {
      className = className + ' ' + style.error;
    }
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<Date>();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`${className} ${style.datePicker}`} key={key}>
      <label htmlFor={title}>{data.label}</label>
      <input
        type="text"
        ref={inputRef}
        className={style.date}
        placeholder="AAAA/MM/DD"
        value={value && value[title]}
        onChange={onBlur}
        readOnly
      />
      <img
        src={date}
        alt="select-date"
        role="button"
        onClick={() => {
          inputRef.current && inputRef.current.focus();
          setIsOpen(!isOpen);
        }}
      />
      <span className={style.pickerButtonDrop}>*</span>
      {isOpen && (
        <DayPicker
          locale={es}
          className={style.picker}
          toDate={new Date()}
          selected={selection}
          onDayClick={(val: any) => {
            setSelection(val);
            inputRef.current!.value = format(val, 'yyyy/MM/dd');
            setFieldValue(title, format(val, 'yyyy/MM/dd'));
            setIsOpen(!isOpen);
          }}
          styles={{
            caption: { color: '#A1A9C7' },
            head: { color: '#A1A9C7' },
            cell: { color: '#A1A9C7' },
          }}
          modifiersStyles={{
            selected: { backgroundColor: '#546DFE' },
          }}
        />
      )}
      {errors && touched && touched[title] && errors[title] && (
        <span style={{ color: 'red' }}>{String(errors[title])}</span>
      )}
    </div>
  );
};

export default MyDatePicker;
