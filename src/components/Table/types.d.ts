export interface GenericProductDto {
  code: string;
  description: string;
  shortDescription: string;
  name: string;
}

export interface ListProps {
  /**
   * Array of object to be mapped inside the table
   */
  listItem: GenericProductDto[];
}

export interface GenericHeaderDto {
  idHeader: string;
  descriptionHeader: string;
}
