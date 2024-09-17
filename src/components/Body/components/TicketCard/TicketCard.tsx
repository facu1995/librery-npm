import { Ticket } from '../../types';
import StatusIssue from '../StatusIssue/StatusIssue';
import style from './ticketCard.module.css';
import React from 'react';

interface Props {
  element: Ticket | any;
  index: number;
  handleModal?: () => void;

  //   setVerIssue: React.Dispatch<React.SetStateAction<number>>
  //   closeConfirm: boolean
  //   setCloseConfirm: React.Dispatch<React.SetStateAction<boolean>>
  //   setStopRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const TicketCard = ({
  element,
  index,
  handleModal,
}: //   setVerIssue,
//   closeConfirm,
//   setCloseConfirm,
//   setStopRefresh
Props) => {
  const summary = element?.summary?.length > 37;
  const email = element?.emailReporter?.length > 20;

  const actualizacion =
    element.updated.substr(8, 2) +
    '-' +
    element.updated.substr(5, 2) +
    '-' +
    element.updated.substr(0, 4);

  return (
    <>
      <ul
        key={index}
        className={style.CardHeaderTicket_list_element}
        //     onClick={() => {
        //       setVerIssue(index)
        //     }
        // }
      >
        <li className={style.list_element_actualizacion}>{actualizacion}</li>
        <StatusIssue estado={element.status?.supportCenterName} type={'body'} />
        <li className={style.list_element_ticket} data-testid="ticket-key">
          {element.key}
        </li>

        <li className={style.list_element_asunto}>
          {element.summary}
          {summary && (
            <span className={style.spanTooltip}>{`${element.summary}`}</span>
          )}
        </li>

        <li className={style.list_element_tipo}>{element.issueType}</li>
        <li className={style.list_element_dirigido}>Atención al cliente</li>
        <li className={style.list_element_informador} id="email">
          {element.emailReporter}
          {email && (
            <span
              className={style.spanTooltip}
            >{`${element.emailReporter}`}</span>
          )}
        </li>
        <li
          className={style.list_element_img}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {element.status?.supportCenterName
            .toLowerCase()
            .match('resolución') != null ? (
            <button
              // onClick={() => setVerIssue(index)}
              className={style.btn_confirmar}
            >
              <span className={style.spanTooltip}>Responder resolución</span>
            </button>
          ) : element.status?.supportCenterName
              .toLowerCase()
              .match('cerrado') != null ? (
            <button className={style.btn_responder_dis} />
          ) : (
            <button
              className={style.btn_responder}
              // onClick={() => setVerIssue(index)}
            >
              <span className={style.spanTooltip}>Responder</span>
            </button>
          )}
          {element.status?.beClosed ? (
            <button className={style.btn_cerrar} onClick={handleModal}>
              <span className={style.spanTooltip}>Cerrar ticket</span>
            </button>
          ) : (
            <button className={style.btn_cerrar_dis} />
          )}
        </li>
      </ul>
    </>
  );
};

export default TicketCard;
