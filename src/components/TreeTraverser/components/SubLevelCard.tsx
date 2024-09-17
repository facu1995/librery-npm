import React from 'react';
import style from '../TreeTraverser.module.css';
import { CategoryData } from '../@types/types';
import { getIcon } from '../TreeTraverser';

const SubLevelCard = ({
  prop,
  traverse,
}: {
  prop: CategoryData;
  traverse: (param: string) => void;
}) => {
  return (
    <div
      className={style.subLevelCard}
      onMouseDown={() => {
        traverse(prop.id);
      }}
    >
      <figure>
        <img draggable={false} src={getIcon(prop.icon)} alt={prop.icon} />
      </figure>
      <section>
        <h3>{prop.description}</h3>
        {prop.code ? <span>CODIGO {prop.code}</span> : null}
      </section>
    </div>
  );
};

export default SubLevelCard;
