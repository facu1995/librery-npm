import React, { Dispatch, SetStateAction, useState } from 'react';
import style from './TreeTraverser.module.css';
import TraversedTrack from './components/TraversedTrack';
import FirstLevelCard from './components/FirstLevelCard';
import SubLevelCard from './components/SubLevelCard';
import EmptyState from './components/EmptyState';
import volume from './resources/volume.json';
import { categoriesIconDictionary } from './assets/icons';
import { CategoryData } from './@types/types';

interface TreeStructure {
  [key: string]: string | number | boolean | undefined | never[];
  id: string;
  description: string;
  // Añade otras propiedades que necesites
}

export interface TreeTraverserProps {
  /**
   * Volumen de datos a renderizar.
   */
  data: TreeStructure[];
  /**
   * Clave o patrón mediante el cual se realiza la navegación.
   */
  fatherProp?: string;
  /**
   * Actualiza el estado determinado por la función pasada como prop
   */
  set?: Dispatch<SetStateAction<string[]>>;
  /**
   * Despliega el componente asignando true sobre un estado local definido
   */
  validate?: () => void;
  /**
   * Oculta el componente asignando false sobre un estado local definido
   */
  invalidate?: () => void;
}

const INITIAL_LEVEL = 0;

export const getIcon = (param: string) => {
  return categoriesIconDictionary[param];
};

/**
 * TreeTraverser Infosis UI
 */
const TreeTraverser = ({
  data = [...volume.categories, ...volume.favorites],
  fatherProp = 'fatherId',
}: TreeTraverserProps) => {
  const [, setFilteredCategories] = useState<string[]>([]);
  const [fatherId, setFatherId] = useState<string[]>([]);
  const [level, setLevel] = useState<number>(fatherId?.length || INITIAL_LEVEL);

  if (fatherId?.length === 0 && level !== 0) {
    setLevel(0);
  }

  const navigateFurther = (id: string) => {
    const category = data.find((cat) => cat.id === id);
    if ((category as any)[fatherProp]) {
      const pathToFather = findFatherCategory(id).reverse();
      setFatherId(pathToFather);
      setLevel(pathToFather.length);
    } else {
      const current = fatherId;
      current.push(id);
      setFatherId(current);
      setLevel(level + 1);
    }
  };

  const findFatherCategory = (id: string, ids: string[] = []): string[] => {
    const category = data.find((cat) => cat.id === id);
    if (category && (category as any)[fatherProp]) {
      return findFatherCategory((category as any)[fatherProp], [
        ...ids,
        category.id,
      ]);
    }
    return [...ids, id];
  };

  const navigateBack = (e: any) => {
    e.stopPropagation();
    setFilteredCategories([]);
    const current = fatherId;
    current.pop();
    setFatherId(current);
    if (current.length === 0) {
      setLevel(0);
    } else {
      setLevel(level - 1);
    }
  };

  const navigateBackToOrigin = () => {
    setFilteredCategories([]);
    setFatherId([]);
    setLevel(INITIAL_LEVEL);
  };

  const selectRenderMethod = () => {
    switch (level) {
      case 0:
        return (
          <>
            {data
              .filter((cat) => !cat[fatherProp])
              .map((cat) => (
                <FirstLevelCard
                  key={cat.id}
                  prop={cat as CategoryData}
                  traverse={navigateFurther}
                />
              ))}
          </>
        );
      case 1:
        return (
          <>
            {data.filter((cat) => cat[fatherProp] === fatherId[0]).length >=
            1 ? (
              data
                .filter((cat) => cat[fatherProp] === fatherId[0])
                .map((cat) => (
                  <SubLevelCard
                    key={cat.id}
                    prop={cat as CategoryData}
                    traverse={navigateFurther}
                  />
                ))
            ) : (
              <EmptyState origin="no-sub-cat" />
            )}
          </>
        );
      case 2:
        return (
          <>
            {data.filter((cat) => cat[fatherProp] === fatherId[1]).length >=
            1 ? (
              data
                .filter((cat) => cat[fatherProp] === fatherId[1])
                .map((cat) => (
                  <SubLevelCard
                    key={cat.id}
                    prop={cat as CategoryData}
                    traverse={navigateFurther}
                  />
                ))
            ) : (
              <EmptyState origin="no-sub-cat" />
            )}
          </>
        );
      default:
        return (
          <>
            {data.filter(
              (cat) => cat[fatherProp] === fatherId[fatherId.length - 1]
            ).length >= 1 ? (
              data
                .filter(
                  (cat) => cat[fatherProp] === fatherId[fatherId.length - 1]
                )
                .map((cat) => (
                  <SubLevelCard
                    key={cat.id}
                    prop={cat as CategoryData}
                    traverse={navigateFurther}
                  />
                ))
            ) : (
              <EmptyState origin="no-sub-cat" />
            )}
          </>
        );
    }
  };

  /* Uncomment when applying it to the project and invalidate() and validate() props */
  // useEffect(() => {
  //   if (level === 0) {
  //     invalidate();
  //   } else {
  //     set(fatherId);
  //     validate();
  //   }
  // }, [level]);

  return (
    <div className={style.TreeTraverser}>
      <TraversedTrack
        categories={data as CategoryData[]}
        track={fatherId}
        setTrack={setFatherId}
        backToOrigin={navigateBackToOrigin}
        goBack={navigateBack}
      />
      {data.length ? selectRenderMethod() : <EmptyState origin="no-cat" />}
    </div>
  );
};

export default TreeTraverser;
