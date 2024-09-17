import { ReactNode } from 'react';
import React from 'react';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import style from './header.module.css';
import infosisLogo from '../../stories/assets/logo-infosis.png';

export interface HeaderProps {
  /**
   * HTML to render
   */
  children?: ReactNode;
  /**
   * Optional classname to customize the popUp's style
   */
  className?: string;
}

const TICKET_PAGE_BUTTONS = (
  <>
    <Counter color="secondary" label="Esperando respuesta" amount={0} />
    <Counter color="principal" label="Confirmar resolución" amount={0} />
    <Button
      type="primary"
      label="+ Crear Ticket"
      size="larger"
      borderRadius={5}
    />
  </>
);

const Header = ({
  className = '',
  children = TICKET_PAGE_BUTTONS,
}: HeaderProps) => {
  return (
    <header className={`${className} ${style.header}`}>
      <img src={infosisLogo} alt="" />
      <div>{children}</div>
    </header>
  );
};

export default Header;
