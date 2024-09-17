import SearchBar from '../SearchBar/SearchBar';
import FilterFields from '../FilterFields/FilterFields';
import filterJSON from './utils/FILTER_JSON.json';
import { MyLabel } from '../Label/MyLabel';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import openedMenu from './assets/Line_H.svg';
import closedMenu from './assets/Menu.svg';
import Collapse from '../Collapse/Collapse';
import { FilterParams } from '../TicketControlPage/TicketControlPage';
import style from './filterControls.module.css';
import React from 'react';

export interface FilterControlProps {
  handle: (obj: FilterParams) => void;
  reset: () => void;
  searchByName?: (arg: ChangeEvent) => void;
}

const FilterControls = ({
  handle,
  reset,
  searchByName,
}: FilterControlProps) => {
  const [openFields, setOpenFields] = useState(false);

  const chooseIcon = (state: boolean) => {
    if (state) {
      return openedMenu;
    } else {
      return closedMenu;
    }
  };

  const closeCollapse = () => {
    setOpenFields(!openFields);
  };

  const eraseForm = () => {
    reset && reset();
    closeCollapse();
  };

  return (
    <div className={style.itemsFilter} id="filter">
      <div className={style.filterHead}>
        <SearchBar handle={searchByName as ChangeEventHandler} />
        <div className={style.filterButton}>
          <button
            onClick={() => {
              setOpenFields(!openFields);
            }}
            data-testid="colapse-button"
          >
            <img src={chooseIcon(openFields)} alt="colapse-btn" />
          </button>
          <MyLabel label="Filtros" size="h4" color="primary" />
        </div>
      </div>
      <Collapse isOpen={openFields}>
        <FilterFields
          json={filterJSON}
          handleSubmit={handle}
          close={closeCollapse}
          reset={eraseForm}
        />
      </Collapse>
    </div>
  );
};

export default FilterControls;
