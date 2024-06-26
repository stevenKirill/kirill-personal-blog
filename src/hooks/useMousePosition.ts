import React, { RefObject } from 'react';

const useMousePosition = (ref: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = React.useState<{
    x: null | number,
    y: null | number,
  }>({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref.current) {
        setMousePosition({
          x: ev.clientX - ref.current.getBoundingClientRect().left,
          y: ev.clientY - ref.current.getBoundingClientRect().top,
        });
      }
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
};

export default useMousePosition;
