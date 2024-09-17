import '@testing-library/jest-dom';
import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import TreeTraverser, { TreeTraverserProps } from './TreeTraverser';
import volume from './resources/volume.json';

describe('< TreeTraverser />', () => {
  const setTraverseCategory = jest.fn();
  let component: RenderResult;
  let treeTraverseProps: TreeTraverserProps = {
    data: [...volume.categories, ...volume.favorites],
    set: setTraverseCategory,
  };

  beforeEach(() => {
    component = render(<TreeTraverser {...treeTraverseProps} />);
  });

  test('El componente se renderiza correctamente', () => {
    expect(component.container).toBeInTheDocument();
  });

  test('Se reciben las props obligatorias data y set', () => {
    expect(Array.isArray(treeTraverseProps.data)).toBe(true);
    expect(treeTraverseProps.set).toEqual(setTraverseCategory);
  });

  test('Cada objeto de data debe tener definidas las propiedades id y description', () => {
    treeTraverseProps.data.forEach((object) => {
      expect(object).toHaveProperty('id');
      expect(object).toHaveProperty('description');
    });
  });

  test('En caso de pasar el patron fatherProp, es de tipo string', () => {
    if (treeTraverseProps.fatherProp) {
      expect(typeof treeTraverseProps.fatherProp).toBe('string');
    }
  });

  test('En caso de pasar las props validate e invalidate, son funciones', () => {
    if (treeTraverseProps.validate) {
      expect(typeof treeTraverseProps.validate).toBe('function');
    }

    if (treeTraverseProps.invalidate) {
      expect(typeof treeTraverseProps.invalidate).toBe('function');
    }
  });
});
