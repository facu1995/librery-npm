import style from './mylabel.module.css';
import React, { ReactNode } from 'react';
import importantImg from './assets/importantImg.svg';
export interface Props {
  /**
   * Escribimos el texto a mostar
   */
  label: string;
  /**
   * Esto setea el tamaño
   */
  size: 'normal' | 'h1' | 'h2' | 'h3' ;

  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores basicos
   */
  color?: string;
  /**
   * Color de fondo
   */
  backgroundColor?: string;
  /**
   * Font's weight
   */
  weight?: 'light' | 'bold' | 'bolder';
  /**
   * HTML to render
   */
  children?: ReactNode;
  /**
   * Render the ImportantIcon
   */
  isImportant?: boolean;
}

const VALUES_OF_WHITE = [
  'white',
  'transparent',
  '#ffffff',
  '#fff',
  'rgb(255, 255, 255)',
  'rgb(100%, 100%, 100%)',
  'hsl(0, 0%, 100%)',
  'hsl(0, 0%, 100%)',
  'rgba(255, 255, 255, 0)',
  'rgba(100%, 100%, 100%, 0)',
  'hsla(0, 0%, 100%, 0)',
  'sla(0, 0%, 100%, 0)',
];

export const MyLabel = ({
  allCaps = false,
  label = 'No Label',
  size = 'normal',
  color = '#3d5a80',
  weight = 'bold',
  backgroundColor = 'transparent',
  isImportant,
  children,
}: Props) => {
  const lowerBackground = backgroundColor.toLowerCase();
  return (
    <span
      className={`${style.label} ${style[size]} ${style[color]} ${
        style[weight]
      } 
      ${
        VALUES_OF_WHITE.includes(lowerBackground)
          ? style.noPadding
          : style.padding
      }`}
      style={{ backgroundColor, color }}
    >
      {allCaps ? label.toUpperCase() : label}
      {children}
      {isImportant ? (
        <img
          className={`${style[size]} ${style.imgImportant} `}
          src={importantImg}
          alt="importantImg"
        />
      ) : null}
    </span>
  );
};

export default MyLabel;
