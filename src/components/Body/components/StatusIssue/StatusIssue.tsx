import style from './statusIssue.module.css';
import React from 'react';

interface StatusProps {
  estado?: string;
  type: string;
}

const StatusIssue = ({ estado, type }: StatusProps) => {
  let statusIssue: string;

  estado?.toLowerCase().match('abierto') != null
    ? (statusIssue = 'abierto')
    : estado?.toLowerCase().match('respuesta') != null
    ? (statusIssue = 'esperando')
    : estado?.toLowerCase().match('confirmar') != null
    ? (statusIssue = 'confirmar')
    : estado?.toLowerCase().match('cerrado') != null
    ? (statusIssue = 'cerrado')
    : (statusIssue = '');

  return (
    <li className={style['list_element_estado_' + type]}>
      <div className={style['list_element_estado_' + statusIssue + '_' + type]}>
        {estado?.toLowerCase()}
      </div>
    </li>
  );
};

export default StatusIssue;
