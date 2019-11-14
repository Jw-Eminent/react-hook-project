import React, { useState, useEffect, useCallback } from 'react';

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  });

  return size;
}

function Hooks_demo(props) {
  const size = useSize();
  return (
    <div>
      {`width: ${size.width}, height: ${size.height}`}
    </div>
  );
}

export default Hooks_demo;