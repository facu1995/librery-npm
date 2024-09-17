import { useDropzone } from 'react-dropzone';
import PreviewFiles from './components/PreviewFiles';
import uploadIcon from './assets/uploadIcon.svg';
import style from './droparea.module.css';
import { DynamicInputProps } from '../../../../types';
import React, { useCallback, useState } from 'react';
import useFormFiles from '../../../../../../hooks/useFormFiles';
import { joinClasses } from '../../../../../PopUp/utils/utils';
import { SPACE, popupSizes } from '../../../../../PopUp/constants/constants';

const DropArea = ({ data, className, key, value, size }: DynamicInputProps) => {
  const { title } = data;

  const { handleNewFile, deleteFile } = useFormFiles(title);

  const [error, setError] = useState<string>('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const fileAlreadyIs = (file: File) =>
        value[title].some((f: File) => f.name === file.name);
      const MAX_SIZE_ALLOWED = 10485760; //10MB
      acceptedFiles.forEach((file: File) => {
        let { size } = file;
        if (size <= MAX_SIZE_ALLOWED) {
          if (fileAlreadyIs(file)) {
            setError(`El archivo ${file.name} ya fue seleccionado.`);
          } else {
            handleNewFile(file);
            setError('');
          }
        } else {
          setError(
            `El archivo ${file.name} es demasiado pesado y no pudo subirse.`
          );
        }
      });
    },
    [handleNewFile, title, value]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div
        className={`${[
          style['dropzone'],
          style[size && size === popupSizes.mobile ? popupSizes.mobile : SPACE],
        ].join(' ')} ${className}`}
        key={key}
      >
        <label htmlFor={data.title}>{data.label}</label>
        <div
          className={joinClasses(
            style['dropInput'],
            style[
              size && size === popupSizes.mobile ? popupSizes.mobile : SPACE
            ]
          )}
        >
          <input {...getInputProps()} />
          <div {...getRootProps()} className={style.content}>
            <img src={uploadIcon} alt="upload-files" />
            <label className={style.tituloDropzone}>
              Arrasta o{' '}
              <label className={style.tituloDropzoneAzul}>
                adjunta{' '}
                <label className={style.tituloDropzone}> un documento</label>
              </label>
            </label>
            <label className={style.subtituloDropzone}>
              Peso máximo por archivo: 10 MB
            </label>
          </div>
        </div>
        {error !== '' && <span className={style.error}>{error}</span>}
        {value[title].length > 0 && (
          <PreviewFiles files={value[title]} deleteFile={deleteFile} />
        )}
      </div>
    </>
  );
};

export default DropArea;
