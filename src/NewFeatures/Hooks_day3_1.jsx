import React, { useState, useRef, useEffect } from 'react';

// useRef 有两种使用场景
// 1.获取子组件或者dom节点的句柄 2.渲染周期之间共享数据的存储

const HooksDemo = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);
  const countRef = useRef({count1, count2});
  console.log(countRef.current, {count1, count2});
  useEffect(() => {
    if (count1 !== countRef.current.count1) {
      countRef.current.count1 = count1;
    }
    if (count2 !== countRef.current.count2) {
      countRef.current.count2 = count2;
    }
  }, [count1, count2]);
  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={() => {setCount1(count1 + 1); }}>count1 Add</button>
      <button onClick={() => {setCount2(count2 - 1); }}>count2 Min</button>
    </div>
  );
};

export default HooksDemo;