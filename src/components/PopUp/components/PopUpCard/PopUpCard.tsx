import { MockItemsInterface } from '../PopUpGallery/PopUpGallery';
import React, { useState } from 'react';
import style from '../../popUp.module.css';

interface CardProps {
  item: MockItemsInterface;
  cardClass?: string;
}

const PopUpCard = ({ item, cardClass }: CardProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${style.popupCard} ${cardClass} ${style[String(selected)]}`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {item.description}
    </div>
  );
};

export default PopUpCard;
