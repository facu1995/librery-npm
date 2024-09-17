import React from 'react';
import styles from '../../popUp.module.css';
import BackButton from '../../../Button/BackButton/BackButton';
import { joinClasses } from '../../utils/utils';
import { EMPTY } from '../../constants/constants';

interface PopUpHeaderProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
  style?: React.CSSProperties;
  className?: string;
  color?: string;
  actionBtn?: () => void;
  backButton?: boolean;
}

const PopUpHeader = ({
  title,
  children,
  className,
  color,
  style,
  actionBtn,
  backButton,
}: PopUpHeaderProps) => {
  return (
    <div
      style={style ? style : { color: color }}
      className={joinClasses(styles.popupHeader, className || EMPTY)}
    >
      {backButton && <BackButton onClick={actionBtn} />}
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default PopUpHeader;
