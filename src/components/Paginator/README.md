# Paginator Component

The `Paginator` component is a reusable React component designed to display a simple pagination control. It allows users to navigate through pages by either incrementing or decrementing the current page number or by directly inputting a page number. 

## Props

The component accepts the following props:

### `currentPage?: number`

- **Description**: Defines the initial position of the paginator. If not provided, it defaults to `1`.
- **Type**: `number`
- **Default**: `1`

### `handleChange: (arg: number) => void`

- **Description**: A callback function that gets triggered every time the page changes. It accepts the current page number as an argument and does not return anything.
- **Type**: `(arg: number) => void`
- **Required**: Yes

### `maxPages?: number`

- **Description**: The maximum number of pages that the paginator can handle. Used to disable the increment or decrement buttons when the limits are reached. If not provided, it defaults to `10`.
- **Type**: `number`
- **Default**: `10`

## Usage

To use the `Paginator` component, import it into your project and provide the necessary props.

```tsx
import React from 'react';
import Paginator from './Paginator';

const Example = () => {
  const handlePageChange = (page: number) => {
    console.log("Current page is", page);
  };

  return (
    <Paginator 
      currentPage={1} 
      handleChange={handlePageChange} 
      maxPages={5}
    />
  );
};

export default Example;
