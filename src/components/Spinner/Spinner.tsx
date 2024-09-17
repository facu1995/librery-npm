import React from 'react';
import styles from './Spinner.module.css';
interface SpinnerProps {
  size?: number;
}

const Spinner = ({ size = 75 }: SpinnerProps) => {
  return <div className={`${styles.loader}`} style={{ width: size }} />;
};
export default Spinner;
