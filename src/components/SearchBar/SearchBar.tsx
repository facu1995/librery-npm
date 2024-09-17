import searchIcon from './assets/searchIcon.svg';
import React, { ChangeEventHandler } from 'react';
import style from './searchBar.module.css';
import { joinClasses } from '../PopUp/utils/utils';
import { PopUpSize } from '../PopUp/PopUp';

export interface SearchBarProps {
  /**
   * function to get the input value and use it as a filtering param
   */
  handle: ChangeEventHandler<HTMLInputElement>;
  /**
   * placeholder text, by default "Buscar..."
   */
  placeholder?: string;
  /**
   * value associated with the input
   */
  value?: string;
  size?: PopUpSize;
}

const SearchBar = ({
  handle,
  placeholder = 'Buscar...',
  value,
  size,
}: SearchBarProps) => {
  return (
    <div
      className={joinClasses(
        style['filter'],
        style[size && size === 'mobile' ? 'mobile' : ' ']
      )}
    >
      <input placeholder={placeholder} onChange={handle} value={value} />
      <img src={searchIcon} alt="buscador" />
    </div>
  );
};

export default SearchBar;
