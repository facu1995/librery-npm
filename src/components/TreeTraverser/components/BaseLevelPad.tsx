import React from 'react';
import style from '../TreeTraverser.module.css';
import arrowIcon from '../assets/icons/arrow.svg';

export const BaseLevelPad = ({
  backToOrigin,
}: {
  backToOrigin?: () => void;
}) => {
  return (
    <div className={style.baseLevelPad} onClick={backToOrigin}>
      <img draggable={false} src={arrowIcon} alt="back" className="svg" />
      <label>Categorías</label>
    </div>
  );
};

export default BaseLevelPad;
