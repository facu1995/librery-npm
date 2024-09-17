import React from 'react';
import style from '../../popUp.module.css';
import PopUpCard from '../PopUpCard/PopUpCard';
import { joinClasses } from '../../utils/utils';
import { EMPTY } from '../../constants/constants';

export interface MockItemsInterface {
  id: string;
  description: string;
}

interface PopUpCardProps {
  items: Array<MockItemsInterface>;
  children?: JSX.Element | JSX.Element[];
  galleryClass?: string;
  cardClass?: string;
}

const PopUpGallery = ({
  items,
  children,
  galleryClass,
  cardClass,
}: PopUpCardProps) => (
  <>
    {children}
    <div
      className={joinClasses(style['popupCardGallery'], galleryClass || EMPTY)}
    >
      {items.length > 0 &&
        items.map((item, index) => (
          <PopUpCard item={item} key={index} cardClass={cardClass} />
        ))}
      {items.length === 0 && <h3>No hay items</h3>}
    </div>
  </>
);

export default PopUpGallery;
