import React from 'react';
import style from '../../popUp.module.css';
interface PopUpBodyProps {
  children?: JSX.Element | JSX.Element[] | boolean;
  style?: React.CSSProperties;
  className?: string;
}

const PopUpBody = ({ children }: PopUpBodyProps) => {
  return <div className={style.popupBody}>{children}</div>;
};

export default PopUpBody;
