import error from './assets/ErrorIcon.svg';
import confirm from './assets/ConfirmIcon.svg';
import success from './assets/SuccessIcon.svg';
import style from './message.module.css';
import React from 'react';

export interface MessageProps {
  /**
   * If provided, it will be added to the classList of component
   */
  className?: string;
  /**
   * Type of message, one of three options
   */
  type: 'success' | 'confirm' | 'error';
  /**
   * Title of message
   */
  message1?: string;
  /**
   * Subtitle of message
   */
  message2?: string;
}

const icon = (type: string) => {
  if (type === 'error') return error;
  if (type === 'success') return success;
  if (type === 'confirm') return confirm;
};

const Message = ({
  className = '',
  type = 'error',
  message1 = '',
  message2 = '',
}: MessageProps) => {
  return (
    <div className={`${className} ${style.message}`}>
      <img src={icon(type)} alt={type} />
      <h2>{message1}</h2>
      <span>{message2}</span>
    </div>
  );
};

export default Message;
