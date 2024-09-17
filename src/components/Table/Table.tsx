import React from 'react';
import style from './table.module.css';
import List from './components/List/List';
import { GenericHeaderDto, GenericProductDto } from './types';
export interface TableProps {
  /**
   * Array of object to be mapped inside the table
   */
  listItem: GenericProductDto[];
  /**
   * Array of object to be Header on the table
   */
  listHeaderItem: GenericHeaderDto[];
  /**
   * Function that will run when clicking a row, and will pass the item DTO as param
   */
  onClick?: (param: GenericProductDto) => unknown;
}

const Table = ({ listItem, listHeaderItem, onClick }: TableProps) => {
  return (
    <div className={style.Table}>
      <div className={style.Header}>
        <ul className={style.HeaderLeft}>
          <li className={style.ListElementId} data-testid="header-container">
            {listHeaderItem![0].descriptionHeader}
          </li>
          <li className={style.ListElementDescription}>
            {listHeaderItem![1].descriptionHeader}
          </li>
        </ul>
        <ul className={style.HeaderRight}>
          <li>{listHeaderItem![2].descriptionHeader}</li>
        </ul>
      </div>
      <List listItem={listItem} onClick={onClick} />
    </div>
  );
};

export default Table;
