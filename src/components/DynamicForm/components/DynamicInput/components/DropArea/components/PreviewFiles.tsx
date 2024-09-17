import style from './filesPreview.module.css';
import deleteIcon from '../assets/deleteFile.svg';
import React from 'react';

interface PreviewProps {
  files: File[];
  deleteFile: Function;
}

const PreviewFiles = ({ files, deleteFile }: PreviewProps) => {
  let label =
    files.length > 1
      ? `Archivos cargados ${files.length}/${files.length}`
      : 'Archivo cargado 1/1';

  return (
    <ul className={style.container}>
      {files.length > 0 && <label className={style.label}>{label}</label>}
      {files.length > 0 &&
        files.map((file, index) => (
          <li key={index} className={style.boxFile}>
            <label key={index} className={style.labelFile}>
              {file.name}
            </label>
            <img
              src={deleteIcon}
              alt="borrar"
              className={style.deleteImg}
              onClick={() => deleteFile(file)}
            />
          </li>
        ))}
    </ul>
  );
};

export default PreviewFiles;
