import style from './popUp.module.css';
import { useEffect, useState } from 'react';
import Button, { ButtonProps } from '../Button/Button';
import React from 'react';
import PopUpHeader from './components/PopUpHeader/PopUpHeader';
import PopUpBody from './components/PopUpBody/PopUpBody';
import PopUpFooter from './components/PopUpFooter/PopUpFooter';
import PopUpFilter from './components/PopUpFilter/PopUpFilter';
import PopUpGallery from './components/PopUpGallery/PopUpGallery';
import PopUpList from './components/PopUpList/PopUpList';
import { joinClasses } from './utils/utils';
import {
  colors,
  buttonLabels,
  popupSizes,
  SPACE,
  EMPTY,
} from './constants/constants';

export type PopUpSize = 'mobile' | 'default';
type ButtonsAmount = 1 | 2;

export interface GenericDTO {
  id: string;
  description: string;
  idExternal?: string;
}

export interface GenericHeaderDto {
  idHeader: string;
  descriptionHeader: string;
}

export interface PopUpPops {
  /**
   * While true, the modal will be displayed
   */
  isOpen: boolean;
  /**
   * Setter for modifying isOpen state
   */
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Popup size
   */
  size?: PopUpSize;
  /**
   * If true, list and filter will be rendered
   */
  isList?: boolean;
  /**
   * If true, list on a gallery and filter will be rendered
   */
  isGallery?: boolean;
  /**
   * Setter for modifying headerIdItem state
   */
  setHeaderIdItem?: GenericHeaderDto[];
  /**
   * Array of object to be mapped inside the modal (if isList === true)
   */
  listItem?: GenericDTO[];
  /**
   * Object Id inside the modal (if isList === true)
   */
  idItem?: string;
  /**
   * Setter for modifying idItem state
   */
  setIdItem?: React.Dispatch<React.SetStateAction<string>>;
  /**
   * Title for the header
   */
  title: string;
  /**
   * HTML to render (if isList, it won't)
   */
  children?: JSX.Element | JSX.Element[] | React.Component;
  /**
   * Show or hide default buttons
   */
  showButtons?: boolean;
  /**
   * Display one or two buttons, if omitted there will be 2 buttons
   */
  buttonsAmount?: ButtonsAmount;
  /**
   * Display or hide back button
   */
  backButton?: boolean;
  /**
   * Function when clicking on back button
   */
  actionBtn?: () => void;
  /**
   * Text for the main button (positive action)
   */
  button1?: string;
  /**
   * Text for the dismiss button
   */
  button2?: string;
  /**
   * Optional classname to customize the popUp's style
   */
  className?: string;
  /**
   * Optional color to customize the title of popUp
   */
  color?: string;
  /**
   * Optional color to customize the button 1
   */
  colorButton1?: string;
  /**
   * Optional color to customize the button 2
   */
  colorButton2?: string;
}

const PopUp = ({
  className,
  title,
  isOpen = true,
  setIsOpen,
  size,
  isList = false,
  listItem = [],
  children,
  showButtons = true,
  buttonsAmount = 2,
  backButton = true,
  button1 = buttonLabels.ok,
  button2 = buttonLabels.cancel,
  color = colors.primary,
  colorButton1,
  colorButton2,
  isGallery = false,
  setHeaderIdItem,
}: PopUpPops) => {
  const [filter, setFilter] = useState('');

  const closeAndResetFilter = () => {
    setIsOpen && setIsOpen(!isOpen);
    setFilter('');
  };

  const calculateButtons = (amount: ButtonsAmount) => {
    const buttons: JSX.Element[] = [];
    for (let idxButton = amount; idxButton >= 1; idxButton--) {
      let buttonProps: ButtonProps = {
        label: idxButton === 1 ? button1 : button2,
        size: size && size === popupSizes.mobile ? 'medium' : 'larger',
        borderRadius: 10,
        color: idxButton === 1 ? colorButton1 : colorButton2,
      };
      if (amount === 2) {
        if (idxButton === amount) {
          buttonProps.type = 'secondary';
          buttonProps.onClick = closeAndResetFilter;
        } else {
          buttonProps.onClick = setIsOpen && setIsOpen;
        }
      }
      buttons.push(<Button key={idxButton} {...buttonProps} />);
    }
    return <>{buttons}</>;
  };

  function itemFilter(filter: string, listItem: GenericDTO[]): GenericDTO[] {
    return listItem.filter(
      (element) =>
        element.id.toUpperCase().includes(filter.toUpperCase()) ||
        element.description.toUpperCase().includes(filter.toUpperCase())
    );
  }

  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (setIsOpen) {
      setIsOpen((prevState) => !prevState); // Alterna el estado de isOpen
    }
  };

  return (
    <div
      className={joinClasses(
        style['popupContainer'],
        style[`${size}`],
        style[String(isOpen)],
        className || EMPTY
      )}
      data-testid="popup-container"
      onClick={handleClick}
    >
      <div
        className={joinClasses(
          style['GenericModalContainer'],
          style[size && size === popupSizes.mobile ? popupSizes.mobile : SPACE]
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={joinClasses(
            style['popupModal'],
            style[
              size && size === popupSizes.mobile ? popupSizes.mobile : SPACE
            ]
          )}
        >
          <PopUpHeader
            title={title}
            color={color}
            backButton={backButton}
            actionBtn={() => setIsOpen!(false)}
          />
          <PopUpBody>
            {isGallery ? (
              <>
                <PopUpFilter
                  filter={filter}
                  setFilter={setFilter}
                  size={size}
                />
                <PopUpGallery
                  items={itemFilter(filter, listItem)}
                ></PopUpGallery>
              </>
            ) : (
              <>{children}</>
            )}
            {isList ? (
              <>
                <PopUpFilter
                  filter={filter}
                  setFilter={setFilter}
                  size={size}
                />
                <PopUpList
                  list={itemFilter(filter, listItem)}
                  setIdItem={setHeaderIdItem}
                ></PopUpList>
              </>
            ) : (
              <></>
            )}
          </PopUpBody>
          {showButtons && (
            <PopUpFooter>{calculateButtons(buttonsAmount)}</PopUpFooter>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
