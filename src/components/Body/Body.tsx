import noHayResultados from './assets/noHayFiltro.svg';
import TicketCard from './components/TicketCard/TicketCard';
import { Ticket } from './types';
import React from 'react';
import style from './body.module.css';

interface Props {
  tickets: Ticket[];
  handleModal?: (arg: any) => void;
}

const Body = ({ tickets, handleModal }: Props) => {
  return (
    <div className={style.Body_container}>
      <p className={style.Body_titule}>Tickets creados</p>
      {tickets.length > 0 ? (
        <div className={style.Body_list}>
          <ul className={style.Body_list_header}>
            <li className={style.list_element_actualizacion}>actualización</li>
            <li
              style={{ width: '190px', justifyContent: 'center' }}
              className={style.list_element_estado}
            >
              estado
            </li>
            <li style={{ width: '80px' }} className={style.list_element_ticket}>
              ticket
            </li>
            <li
              style={{ width: '250px' }}
              className={style.list_element_asunto}
            >
              asunto
            </li>
            <li style={{ width: '80px' }} className={style.list_element_tipo}>
              tipo
            </li>
            <li
              style={{ width: '140px' }}
              className={style.list_element_dirigido}
            >
              dirigido a
            </li>
            <li
              style={{ width: '180px' }}
              className={style.list_element_informador}
            >
              informador
            </li>
            <li
              style={{ width: '100px' }}
              className={style.list_element_img}
            ></li>
          </ul>
          <div className={style.Body_list_container}>
            {tickets.map((element: Ticket, index: number) => (
              <TicketCard
                key={element.id}
                element={element}
                index={index}
                handleModal={() => {
                  handleModal!({ id: element.key, summary: element.summary });
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={style.div_empty}>
          <img src={noHayResultados} alt="notImage.jpg" />
          <h4 className={style.elementos_empty}>
            No hay resultados de búsqueda con los filtros aplicados
          </h4>
        </div>
      )}
    </div>
  );
};

export default Body;
