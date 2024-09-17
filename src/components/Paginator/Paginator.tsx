import style from './paginator.module.css';
import { MyLabel } from '../Label/MyLabel';
import ableNext from './assets/ableNext.svg';
import disableNext from './assets/disableNext.svg';
import React, { useState } from 'react';

export interface PaginatorProps {
  /**
   * defines the current position of the paginator, defaulted to 1
   */
  currentPage?: number;
  /**
   * function to retrieve the current page number on every change, takes a parameter of number type as argument and returns nothing
   */
  //
  handleChange: (arg: number) => void;
  /**
    max amount of pages, used for disabling buttons when limit reached, defaulted to 10
     * 
     */
  maxPages?: number;
}

const Paginator = ({
  currentPage = 1,
  handleChange,
  maxPages = 10,
}: PaginatorProps) => {
  const [current, setCurrent] = useState<number>(currentPage);

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { valueAsNumber } = e.target;
    if (valueAsNumber > maxPages) {
      valueAsNumber = maxPages;
    }
    if (valueAsNumber < 1) {
      valueAsNumber = 1;
    }
    setCurrent(valueAsNumber);
    handleChange(valueAsNumber);
  };

  const handleDecrement = () => {
    setCurrent(current - 1);
    handleChange(current - 1);
  };

  const handleIncrement = () => {
    setCurrent(current + 1);
    handleChange(current + 1);
  };

  return (
    <div className={style.paginator}>
      <MyLabel label="Página" size="h3" color="tertiary" weight="light" />
      <input
        type="number"
        value={current}
        onChange={handlePageChange}
        max={maxPages}
      />
      <p>
        {' '}
        de
        <span> {maxPages}</span>
      </p>
      <div>
        <button onClick={handleDecrement} disabled={current > 1 ? false : true}>
          <img src={current > 1 ? ableNext : disableNext} alt="previous page" />
        </button>
        <button
          onClick={handleIncrement}
          disabled={current >= maxPages ? true : false}
        >
          <img
            src={current >= maxPages ? disableNext : ableNext}
            alt="next page"
          />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
