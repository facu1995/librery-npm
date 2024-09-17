import SearchBar from '../../../SearchBar/SearchBar';
import React from 'react';
import styles from '../../popUp.module.css';
import { joinClasses } from '../../utils/utils';
import { PopUpSize } from '../../PopUp';
import { EMPTY } from '../../constants/constants';

interface PopUpFilterProps {
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  size?: PopUpSize;
}

const PopUpFilter = ({
  filter,
  children,
  style,
  className,
  setFilter,
  size,
}: PopUpFilterProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  };

  return (
    <div
      className={joinClasses(styles['popupFilter'], className || EMPTY)}
      style={style}
    >
      <div>
        <SearchBar handle={handleChange} value={filter} size={size} />
      </div>
      {children}
    </div>
  );
};

export default PopUpFilter;
