import { Ticket } from '../Body/types';
import React from 'react';
import style from './counter.module.css';

export interface CounterProps {
  /**
   * Optional classname to customize the counter's style
   */
  className?: string;
  /**
   * Optinal array of objects to count
   */
  items?: Ticket[] | Array<any>;
  /**
   * Optional condition for filtering through the items
   */
  param?: string;
  /**
   * The style of counter
   */
  color: 'principal' | 'secondary';
  /**
   * Text displayed inside label describing what's being counted
   */
  label: string;
  /**
   * You can directly pass the amount to be displayed
   */
  amount?: number;
  /**
   * The counter is a button, you can add an onClick handler
   */
  onClick?: () => void | undefined;
}

const Counter = ({
  className,
  color = 'principal',
  label,
  amount,
  onClick = undefined,
  items,
  param,
}: CounterProps) => {
  const countTicketsByState = (keyword: string) => {
    const waitingTickets = items!.filter((issue: Ticket) =>
      issue.status.supportCenterName.toLowerCase().match(keyword)
    );
    return waitingTickets.length;
  };

  const calculation = param && countTicketsByState(param);

  return (
    <button
      className={`${className} ${style[color]} ${style.counter} ${
        onClick ? style.counterBtn : ''
      } `}
      onClick={onClick && onClick}
    >
      <p>{label}</p>
      {items ? (
        <span>{items.length}</span>
      ) : (
        <span>{amount || amount === 0 ? amount : calculation}</span>
      )}
    </button>
  );
};

export default Counter;
