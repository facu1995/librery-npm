import { FormikErrors, FormikTouched } from 'formik';

export interface FormField {
  title: string;
  label: string;
  placeholder: string;
  type: string;
  options: Array<Option> | string;
  default: string | boolean | Date | undefined | number;
  dependentOn?: string;
}

export interface FormData {
  managedTo: string;
  ticketType: string;
  summary: string;
  description: string;
}

export interface ValidationRules {
  type: string;
  message: string;
  param?: number;
}

export interface DynamicInputProps {
  className?: string;
  data: FormField;
  deleteFiles?: Function;
  errors?: FormikErrors<{ [field: string]: any }>;
  files?: File[];
  value?: any;
  handle: (arg0: any) => void;
  handleFiles?: Function;
  deleteFile?: Function;
  onBlur?: () => void;
  touched?: FormikTouched<any>;
  validateOnBlur?: boolean;
  validateOnMount?: boolean;
  key?: any;
  size?: 'mobile' | 'default';
}

export interface Option {
  label: string;
  value: string;
  title?: string;
}

export interface Validation {
  type: string;
  message: string;
  params?: number;
}
