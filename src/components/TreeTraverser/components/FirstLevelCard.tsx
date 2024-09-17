import React from 'react';
import style from '../TreeTraverser.module.css';
import { CategoryData } from '../@types/types';
import { getIcon } from '../TreeTraverser';

const FirstLevelCard = ({
  prop,
  traverse,
}: {
  prop: CategoryData;
  traverse: (arg: string) => void;
}) => {
  return (
    <div className={style.firstLevelCard} onMouseDown={() => traverse(prop.id)}>
      <figure>
        <img draggable={false} src={getIcon(prop.icon)} alt={prop.icon} />
      </figure>
      <section>
        <h3>{prop.description}</h3>
        <span>{prop.code ? `CÓDIGO ${prop.code}` : ''}</span>
      </section>
    </div>
  );
};

export default FirstLevelCard;
