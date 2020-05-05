import React, { memo, useCallback } from "react";

const AlphaIndex = memo(() => {
  const alphasArr = Array.from(new Array(26), (ele, index) =>
    String.fromCharCode(65 + index)
  );

  const toAlpha = useCallback(alpha => {
    document.querySelector(`[data-cate=${alpha}]`).scrollIntoView();
  }, []);

  return (
    <div className="city-index">
      {/* <li
        key="hot_city"
        className="city-index-item"
        onClick={() => toAlpha('hot_city')}
      >
        热门城市
      </li> */}
      {alphasArr.map(alpha => (
        <li
          key={alpha}
          className="city-index-item"
          onClick={() => toAlpha(alpha)}
        >
          {alpha}
        </li>
      ))}
    </div>
  );
});

export default AlphaIndex;
