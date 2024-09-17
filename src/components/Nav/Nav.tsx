import React, { useState } from 'react';
import style from './Nav.module.css';
import Link from './components/Link/Link';
import { ROUTES, RouteData } from './utils/ROUTES';
import Collapse from '../Collapse/Collapse';
import menuIcon from './assets/menu-icon.svg';

export interface NavProps {
  /**
   * Array containing the data for every link
   */
  routes: RouteData[];
  /**
   * If true, a box-shadow will be displayed, defaulted to false
   */
  shadow?: boolean;
  /**
   * If true, the minimize button will be rendered, defaulted to false
   */
  button?: boolean;
  /**
   * Direction of the nav, defaulted to column
   */
  direction?: 'row' | 'column';
}

const Nav = ({
  routes = ROUTES,
  shadow = false,
  button = false,
  direction = 'column',
}: NavProps) => {
  const [hidden, setHidden] = useState<boolean>(false);

  const hideNavBar = () => {
    setHidden(!hidden);
  };

  return (
    <nav
      className={`${style.Nav} ${shadow ? style.shadow : '0'} ${
        hidden ? style.hidden : ''
      } ${button ? style.button : ''} 
      ${direction === 'row' && style.horizontal}
      `}
    >
      {button && (
        <button onClick={hideNavBar}>
          <img src={menuIcon} alt="hid-nav" />
        </button>
      )}
      <Collapse isOpen={!hidden}>
        <ul className={direction === 'row' ? style.horizontal : ''}>
          {Object.entries(routes).length >= 1 &&
            routes.map((link) => (
              <Link route={link.path} icon={link.icon} key={link.path} />
            ))}
        </ul>
      </Collapse>
    </nav>
  );
};

export default Nav;
