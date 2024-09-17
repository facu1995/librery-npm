import { Option } from '../components/DynamicForm/types';
import { useState, useEffect, useCallback } from 'react';
import { useFormikContext } from 'formik';
import {
  fetchOption,
  handleFetchError,
} from '../components/DynamicForm/utils/getValues';

const ERROR_MESSAGE =
  'No pudimos traer las opciones, tratá de nuevo más tarde. Si el problema persiste, contactá con tu soporte.';

const useGetOptions = (
  options: string | Option[],
  title: string,
  value?: { [key: string]: string | number | boolean | [] },
  dependentOn?: string
) => {
  const [mappableOptions, setMappableOptions] = useState(options);

  let { setFieldError, setFieldTouched, setFieldValue } = useFormikContext();

  const manageError = useCallback(
    (error: Error) => {
      handleFetchError(error, setMappableOptions);
      setFieldTouched(title, true);
      setTimeout(() => {
        setFieldError(title, ERROR_MESSAGE);
      }, 0);
    },
    [setFieldError, setFieldTouched, title]
  );

  if (!dependentOn) {
    if (!Array.isArray(options)) {
      if (!Array.isArray(mappableOptions)) {
        fetchOption(options)
          .then((res) => setMappableOptions(res.record))
          .catch((error) => manageError(error));
      }
    }
  }

  const constructedURL =
    options + '/?' + dependentOn + '=' + value![dependentOn!];

  const currentValueOfDep = value![dependentOn!];

  const resetField = useCallback(() => {
    setFieldValue(title, '');
    setFieldTouched(title, false);
  }, [title, setFieldValue, setFieldTouched]);

  useEffect(() => {
    if (dependentOn && currentValueOfDep) {
      resetField();
      fetchOption(constructedURL)
        .then((res) => {
          setMappableOptions(res.data);
        })
        .catch((error) => manageError(error));
    }
  }, [dependentOn, manageError, constructedURL, resetField, currentValueOfDep]);

  return mappableOptions;
};

export default useGetOptions;
