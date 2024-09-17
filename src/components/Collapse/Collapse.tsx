import React from 'react';
import styles from './Collapse.module.css';
import { ReactNode } from 'react';

export interface CollapseProps {
  /**
   * Inner HTML for the collapse
   */
  children?: ReactNode;
  /**
   * Boolean, if true collapse will be open
   */
  isOpen: boolean;
  /**
   * You can pass an object containing CSS rules in JSX syntax
   */
  style?: React.CSSProperties;
}

const Collapse = ({ isOpen, children, style }: CollapseProps) => {
  return (
    <div
      className={`${styles.collapse} ${styles[String(isOpen)]}`}
      style={style!}
    >
      <div className={`${styles.content} `}>{children}</div>
    </div>
  );
};

export default Collapse;
