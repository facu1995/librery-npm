import React from 'react';
import style from '../../table.module.css';
import addImage from './assets/add.svg';
import { GenericProductDto } from '../../types';

export interface ListProps {
  /**
   * Array of object to be mapped inside the table
   */
  listItem: GenericProductDto[];
  onClick?: (param: GenericProductDto) => unknown;
}

interface RowProps {
  row: GenericProductDto;
  onClick?: (param: GenericProductDto) => unknown;
}

const TableListRow = ({ row, onClick }: RowProps) => {
  const { code, description, name } = row;

  return (
    <div className={style.TableElement}>
      <ul className={style.TableListLeft}>
        <li className={style.TableListElementId}>{code}</li>
        <li className={style.TableListElementDescription}>{description}</li>
      </ul>
      <ul className={style.TableListRight}>
        <li className={style.TableListElementProduct}>
          <button
            className={style.TableListElementProductoBtn}
            onClick={() => {
              onClick && onClick(row);
            }}
          >
            <img src={addImage} alt="addImage" />
          </button>
          Seleciona {name}
        </li>
      </ul>
    </div>
  );
};

const List = ({ listItem, onClick }: ListProps) => {
  return (
    <div className={style.TableList}>
      {listItem!.map((row: GenericProductDto, index) => (
        <TableListRow row={row} key={index} onClick={onClick} />
      ))}
    </div>
  );
};

export default List;
