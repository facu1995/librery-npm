export interface TypedWithString<T> {
  [key: string]: T;
}

export interface CategoryData {
  [key: string]: string | number | boolean | Array<unknown> | undefined;
  id: string;
  description: string;
  icon: string;
  color?: string;
  childs?: Array<unknown>;
  erased: boolean;
  timestamp: number;
  code?: string;
  productsQuantity?: number;
  fatherId?: string;
}

export interface VolumeData {
  categories: CategoryData[];
  favorites?: CategoryData[];
}
