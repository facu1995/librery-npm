import style from './Button.module.css';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Seleccionar el estilo del boton
   */

  type?: 'primary' | 'secondary' | 'disabled' | 'submit';
  /**
   * Seleccione el tamaño de border-radius
   */
  borderRadius?: number;
  /**
   * Desea activar el hover
   */
  hover?: boolean;
  /**
   * Seleccion el tamaño que desea el boton
   */
  size?: 'small' | 'medium' | 'large' | 'larger';
  /**
   * Ingrese el texto del boton
   */
  label?: string;
  /**
   * Contenido del onClick
   */
  onClick?: any;
  /**
   * HTML to render
   */
  children?: ReactNode;
  /**
   * Optional color to customize the button
   */
  color?: string;
}

/**
 * Button infosis UI
 */
const Button = ({
  type = 'primary',
  size = 'medium',
  label = 'Button',
  hover = true,
  borderRadius = 30,
  children,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={Boolean(type === 'disabled')}
      className={[
        style['storybook-button'],
        style[`storybook-button--${size}`],
        style[`storybook-button--${type}`],
        hover && style[`storybook-button--${type}--hover`],
      ].join(' ')}
      style={{ background: color, borderRadius: borderRadius }}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
