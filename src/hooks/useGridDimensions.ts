import { useRef, useState, useLayoutEffect } from 'react';

export function useGridDimensions(): [
  ref: React.RefObject<HTMLDivElement>,
  width: number,
  height: number
] {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridWidth, setGridWidth] = useState(1);
  const [gridHeight, setGridHeight] = useState(1);

  const handleResize = () => {
    const { clientWidth, clientHeight } = gridRef.current!;
    // TODO: remove once fixed upstream
    // we reduce width by 1px here to avoid layout issues in Chrome
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1206298
    setGridWidth(clientWidth - (devicePixelRatio % 1 === 0 ? 0 : 1));
    setGridHeight(clientHeight);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('maximize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('maximize', handleResize);
    };
  }, []);

  return [gridRef, gridWidth, gridHeight];
}
