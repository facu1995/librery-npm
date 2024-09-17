import React from 'react';
import style from '../TreeTraverser.module.css';
import removeIcon from '../assets/icons/remove.svg';
import pointerIcon from '../assets/icons/pointer.svg';
import arrowIcon from '../assets/icons/arrow.svg';
import { getIcon } from '../TreeTraverser';
import { CategoryData } from '../@types/types';

const LevelPad = ({
  categories,
  label,
  idx,
  labels,
  insideInput = false,
  track,
  goBack,
}: {
  categories: CategoryData[];
  label: string;
  idx: number;
  labels: string[];
  insideInput?: boolean;
  track?: string[];
  goBack?: (e: any) => void;
}) => {
  const isGastronomy =
    document.documentElement.classList.contains('gastronomy');
  // comentario de prueba ran lint

  return (
    <div className={track?.length === 1 ? style.noLimit : ''}>
      {insideInput ? (
        <>
          {idx === 0 ? (
            <>
              <img
                draggable={false}
                className={style.categoryIcon}
                src={
                  track &&
                  getIcon(categories.find((cat) => cat.id === track[idx])!.icon)
                }
                alt={
                  track &&
                  categories.find((cat) => cat.id === track[idx])!.description
                }
              />
              <label>{label}</label>
              <img
                draggable={false}
                src={idx === labels.length - 1 ? removeIcon : arrowIcon}
                alt="next"
                className={style.svg}
              />
            </>
          ) : idx === labels.length - 1 ? (
            <>
              <label>{label}</label>
              <button type="button" className={style.removeButton}>
                <img
                  draggable={false}
                  src={removeIcon}
                  alt="remove"
                  className={style.svg}
                />
              </button>
            </>
          ) : null}
        </>
      ) : (
        <>
          {idx === 0 && (
            <img
              draggable={false}
              className={
                isGastronomy
                  ? `${style.categoryGastronomyIcon}`
                  : `${style.categoryIcon}`
              }
              src={
                track &&
                getIcon(categories.find((cat) => cat.id === track[idx])!.icon)
              }
              alt={
                track &&
                categories.find((cat) => cat.id === track[idx])!.description
              }
            />
          )}
          <label>{label}</label>
          {labels.length > 1 && idx !== labels.length - 1 ? (
            <img
              draggable={false}
              src={pointerIcon}
              alt="pointer"
              className={
                isGastronomy ? `${style.pointerGastronomy}` : `${style.pointer}`
              }
            />
          ) : null}
          {idx === labels.length - 1 ? (
            <button
              type="button"
              onClick={
                idx === labels.length - 1
                  ? (e) => goBack && goBack(e)
                  : () => {}
              }
              style={{
                cursor: 'pointer',
              }}
            >
              <img draggable={false} src={removeIcon} alt="X" className="svg" />
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};

export default LevelPad;
