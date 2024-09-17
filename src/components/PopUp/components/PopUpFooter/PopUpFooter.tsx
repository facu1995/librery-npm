import React from 'react';
import styles from '../../popUp.module.css';
import { joinClasses } from '../../utils/utils';
import { EMPTY } from '../../constants/constants';

interface PopUpFooterProps {
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
}

const PopUpFooter = ({ children, style, className }: PopUpFooterProps) => {
  return (
    <div
      className={joinClasses(styles.popupFooter, className || EMPTY)}
      style={style}
    >
      {children}
    </div>
  );
};

export default PopUpFooter;
