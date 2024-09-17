import React, { useEffect, useRef } from 'react';
import style from './tooltip.module.css';

export interface TooltipProps {
  /**
   * add a custom className
   */
  className?: string;
  /**
   * text to be displayed inside the tooltip
   */
  info: string;
  /**
   * A string to use the inner text of the tooltip as a link
   */
  link?: string;
}

const Tooltip = ({ className, info, link = '#' }: TooltipProps) => {
  const tooltip = useRef<HTMLDivElement>(null);

  ///This is a terrible implementation, but's it the onyl way
  ///to achieve this styling across all browsers.
  //This side effect should be erased once Firefox supports the
  //:has() pseudo-class for selecting parents (should happen sometime in 2023)
  //refer to https://caniuse.com/css-has
  useEffect(() => {
    if (tooltip.current) {
      tooltip.current.parentElement!.style.position = 'relative';
      tooltip.current.parentElement!.onmouseenter = () => {
        tooltip!.current!.style.display = 'inline';
      };
      tooltip.current.parentElement!.onmouseleave = () => {
        tooltip!.current!.style.display = 'none';
      };
    }
  }, []);

  return (
    <div className={`${className} ${style.tooltip}`} ref={tooltip}>
      {link === '#' ? (
        <span>{info}</span>
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
          {info}
        </a>
      )}
    </div>
  );
};

export default Tooltip;
