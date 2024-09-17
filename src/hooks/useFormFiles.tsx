import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

const useFormFiles = (title: string) => {
  const { setFieldValue, values } = useFormikContext<object>();

  const [loadedFiles, setLoadedFiles] = useState<File[]>([]);

  const handleNewFile = (file: File) => {
    let currentFiles = loadedFiles;
    currentFiles.push(file);
    setLoadedFiles(currentFiles);
    setFieldValue(title, currentFiles);
  };

  const deleteFile = (file: File) => {
    const currentFiles = loadedFiles.filter((f) => f !== file);
    setLoadedFiles(currentFiles);
    setFieldValue(title, currentFiles);
  };

  const stringValues = Object.values(values).filter(
    (val) => typeof val === 'string'
  );

  const allStringsAreEmpty = stringValues.every((val) => val === '');

  useEffect(() => {
    if (allStringsAreEmpty) {
      setLoadedFiles([]);
    }
  }, [values, allStringsAreEmpty]);

  return { loadedFiles, deleteFile, handleNewFile };
};

export default useFormFiles;
