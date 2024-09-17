import React from 'react';
import { getIcon } from '../TreeTraverser';
import style from '../TreeTraverser.module.css';

const EmptyState = ({ origin }: { origin: 'no-cat' | 'no-sub-cat' }) => {
  return (
    <div className={`${style.emptyState} ${style[origin]}`}>
      <img draggable={false} src={getIcon('empty')} alt="empty_state" />
      <p>
        {origin === 'no-cat'
          ? 'Aún no tienes categorías agregadas, comienza creando tu'
          : 'Llegaste a la última subcategoría disponible. Si es necesario puedes crear una nueva subcategoría.'}
        {origin === 'no-cat' ? (
          <span style={{ cursor: 'pointer' }}>primera categoría.</span>
        ) : null}
      </p>
    </div>
  );
};

export default EmptyState;
