import React, { useState } from 'react';
import style from '../../popUp.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import arrowList from '../../../../stories/assets/arrowList.svg';

export interface GenericDTO {
  id: string;
  description: string;
  idExternal?: string;
}
export interface GenericHeaderDto {
  idHeader: string;
  descriptionHeader: string;
}

export interface ListProps {
  /**
   * Array of object for table
   */
  list?: GenericDTO[];
  /**
   * Array of object for header table
   */
  setIdItem?: GenericHeaderDto[];
}

const PopUpList = ({ list, setIdItem }: ListProps) => {
  const [active, setActive] = useState<number>(-1);
  const [, setPageProduct] = useState<number>(0);
  const [hasMore] = useState(true);

  function selectActive(number: number) {
    setActive(number);
  }

  return (
    <div className={style['GenericProductSelection']}>
      <div className={style['GenericTable']}>
        <div className={style['GenericHeader']}>
          <ul className={style['HeaderTable']}>
            <li className={style['TableCode']}>
              {setIdItem![0].descriptionHeader}
            </li>
            <li className={style['TableDescription']}>
              {setIdItem![1].descriptionHeader}
            </li>
          </ul>
        </div>
        <InfiniteScroll
          dataLength={list!.length}
          height={273}
          next={() => setPageProduct((prevPag) => prevPag + 1)}
          hasMore={hasMore}
          className="scroll"
          loader={''}
        >
          <div className={style.TableList}>
            {list?.length !== 0 &&
              list?.map((row, index) => {
                return (
                  <div className={style.TableElement} key={row.id}>
                    <ul
                      onClick={() => {
                        selectActive(index);
                      }}
                      className={
                        active === index
                          ? `${style.ListProductosActive}`
                          : style.ListProductos
                      }
                    >
                      <li className={style.ListCode}>{row.id}</li>
                      <div className={style.ListDescription}>
                        {row.description.length > 36 && (
                          <>
                            <span className={style.ToolTipDescription}>
                              {row.description}
                            </span>
                          </>
                        )}
                        <div className={style.ElementDescription}>
                          {row.description.length > 36 && (
                            <>
                              <li>
                                {row.description.substring(0, 33).concat('...')}
                              </li>
                            </>
                          )}
                          {row.description.length <= 36 && (
                            <>
                              <li> {row.description} </li>
                            </>
                          )}
                        </div>
                      </div>
                      <img src={arrowList} alt="arrowList" />
                    </ul>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PopUpList;
