import React, { Dispatch, SetStateAction } from 'react';
import style from '../TreeTraverser.module.css';
import BaseLevelPad from './BaseLevelPad';
import LevelPad from './LevelPad';
import { CategoryData } from '../@types/types';

interface TraversedTrackProps {
  categories: CategoryData[];
  insideInput?: boolean;
  backToOrigin?: () => void;
  track?: string[];
  setTrack?: Dispatch<SetStateAction<string[]>>;
  goBack?: (e: any) => void;
}

const TraversedTrack = ({
  categories,
  insideInput = false,
  backToOrigin,
  track,
  goBack,
}: TraversedTrackProps) => {
  const labels: string[] = [];

  track &&
    track?.forEach((track) => {
      const matchedCategory = categories.find((cat) => cat.id === track);
      matchedCategory && labels.push(matchedCategory.description);
    });

  return (
    <>
      {track && track.length ? (
        <div
          className={`${style.traversedTrack} ${
            insideInput ? style.insideInputTrack : ''
          }`}
        >
          {insideInput ? null : <BaseLevelPad backToOrigin={backToOrigin} />}
          {track && !insideInput ? (
            labels.map((label, idx) => (
              <LevelPad
                categories={categories}
                label={label}
                idx={idx}
                key={idx}
                labels={labels}
                track={track}
                goBack={goBack}
              />
            ))
          ) : (
            <>
              {insideInput
                ? labels.map((label, idx) => {
                    if (idx === 0 || idx === labels.length - 1) {
                      return (
                        <LevelPad
                          categories={categories}
                          key={idx}
                          label={label}
                          idx={idx}
                          labels={labels}
                          insideInput={insideInput}
                          track={track}
                          goBack={goBack}
                        />
                      );
                    } else if (idx === 1) {
                      return (
                        <div className={style.noLimit}>
                          <label key={idx}>...</label>
                        </div>
                      );
                    }
                    return null;
                  })
                : null}
            </>
          )}
        </div>
      ) : null}
    </>
  );
};

export default TraversedTrack;
