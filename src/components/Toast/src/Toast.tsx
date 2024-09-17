import React, { CSSProperties } from 'react';
import style from './Toast.module.css';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import confirmIcon from './assets/confirm.svg';
import { createPortal } from 'react-dom';

export interface ToastProps {
  /**
   * Tipo de icono
   */
  type?: 'success' | 'error' | 'test';
  /**
   * Texto del toast
   */
  text: string;
  /**
   * Mensaje del boton que acompaña al toast
   */
  buttonText?: string;
  /**
   * Función al clickear el boton
   */
  onButtonClick?: () => void;
  /**
   * Estilos adicionales del toast
   */
  styles?: CSSProperties;
  /**
   * Referencia al contenedor padre
   */
  portalRef?: HTMLElement | null;
  /**
   * Estilos aplicados al tipo de icono seleccionado
   */
  iconStyles?: CSSProperties;
  /**
   * Color de fondo personalizado
   */
  color?: string;
}

const icon = (type: string) => {
  if (type === 'success') return checkIcon;
  if (type === 'error') return errorIcon;
  if (type === 'test') return confirmIcon;
};

/**
 * Toast Infosis UI
 */
const Toast = ({
  type = 'test',
  text = '',
  buttonText = '',
  onButtonClick,
  styles = {},
  portalRef = null,
  iconStyles = {},
  color,
}: ToastProps) => {
  const toast = (
    <div
      className={[style['container'], style[`${type}`]].join(' ')}
      style={{ ...styles, background: color }}
    >
      <div className={style['icon']}>
        <img
          draggable={false}
          src={icon(type)}
          alt={`${type}-icon`}
          style={iconStyles}
        />
      </div>
      <span className={style['text']}>{text}</span>
      <button className={style['button']} onClick={onButtonClick} type="button">
        {buttonText}
      </button>
    </div>
  );

  if (portalRef) {
    return createPortal(toast, portalRef);
  } else {
    return toast;
  }
};

export default Toast;
