import React, { useState } from 'react';
import { modalStatus } from '../../constants/constants';
import Button from '../../../Button/Button';
import PopUp from '../../PopUp';

const PopUpStories = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        label={isOpen ? modalStatus.close : modalStatus.open}
      />
      <PopUp
        title="Basic PopUp"
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(false);
        }}
        size="default"
      >
        <p>Body of a regular popUp</p>
      </PopUp>
    </>
  );
};

export default PopUpStories;
