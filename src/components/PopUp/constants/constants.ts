import { ColorHexadecimal, ButtonLabel, StatusModal } from '../@types/types';

export const colors: ColorHexadecimal = {
  primary: '#546DFE',
  secondary: '#3D3935',
  success: '#00DEA3',
  error: '#E52222',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#808080',
  red: '#FF0000',
  green: '#008000',
  blue: '#0000FF',
  yellow: '#FFFF00',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
  orange: '#FFA500',
  purple: '#800080',
  pink: '#FFC0CB',
  brown: '#A52A2A',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
};

export const buttonLabels: ButtonLabel = {
  ok: 'OK',
  cancel: 'Cancel',
  submit: 'Submit',
  close: 'Close',
  save: 'Save',
  delete: 'Delete',
  edit: 'Edit',
  update: 'Update',
  create: 'Create',
  confirm: 'Confirm',
  back: 'Back',
  next: 'Next',
  agree: 'Agree',
  disagree: 'Disagree',
  accept: 'Accept',
  reject: 'Reject',
  proceed: 'Proceed',
  view: 'View',
};

export const popupSizes: ButtonLabel = {
  mobile: 'mobile',
  default: 'default',
};

export const modalStatus: StatusModal = {
  open: 'Abrir modal',
  close: 'Cerrar modal',
};

export const EMPTY = '',
  SPACE = ' ';
