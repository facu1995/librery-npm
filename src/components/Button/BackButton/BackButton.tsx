import React from 'react';
import style from './BackButton.module.css';
import arrowIcon from './assets/arrow.svg';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps): JSX.Element => {
  return (
    <button className={style['backButton']} onClick={onClick} type="button">
      <img draggable={false} src={arrowIcon} alt="regresar" />
    </button>
  );
};

export default BackButton;
