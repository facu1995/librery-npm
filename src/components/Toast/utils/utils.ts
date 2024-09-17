import { Colors, Bases } from '../constants/constants';

export const hexToRgb = (hex: string): string => {
  // delete #
  hex = hex.replace('#', '');

  // convert each color value pair to base 16
  const r = parseInt(hex.substring(0, 2), Bases.hexadecimal);
  const g = parseInt(hex.substring(2, 4), Bases.hexadecimal);
  const b = parseInt(hex.substring(4, 6), Bases.hexadecimal);
  return `rgb(${r}, ${g}, ${b})`;
};

export const toastStyles = {
  success: {
    backgroundColor: hexToRgb(Colors.lightGreen),
    borderColor: hexToRgb(Colors.checkGreen),
  },
  error: {
    backgroundColor: hexToRgb(Colors.lightRed),
    borderColor: hexToRgb(Colors.errorRed),
  },
  test: {
    backgroundColor: hexToRgb(Colors.lightGrey),
    borderColor: hexToRgb(Colors.darkGrey),
  },
};
