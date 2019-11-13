// class 组件的不足
// 1. 状态逻辑复用难 -> 缺少复用机制   渲染属性(render-props)和高阶组件(HOC)导致层级冗余
// 2. 趋于复杂难以维护 -> 生命周期函数混杂不相干逻辑 相干逻辑分散在不同生命周期
// 3. this指向困扰 -> 内联函数过度创建新句柄 类成员函数不能保证this
// Hooks 优势
// 1. 函数组件无this问题 2.自定义Hook方便服用状态逻辑 3.副作用的关注点分离

// 约定所有的hooks函数都应该以use开头
// 只在最顶层使用Hook 不要在循环 条件或者嵌套函数中调用Hook
// React依靠Hook调用的顺序来对应state和useState
import React, { useState, useEffect } from 'react';

function HooksDemo(props) {
  // useState
  const [count, setCount] = useState(() => {
    // 只在组件初始化时运行一次 react 会在重复渲染时记住它当前的值
    return props.defaultCount || 0;
  });

  // useEffect  render之后调用
  // 可以看做是 componentDidMount componentDidUpdate componentWillUnmount的组合
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
     setWindowSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }

  // 设置title和监听resize是分离在两个useEffect中  实现关注点分离 互不干扰
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    // 需要清除的effect操作时 返回一个函数进行清除操作, react会在组件卸载以及
    // 执行当前effect之前对上一个effect进行清除
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  useEffect(() => {
    console.log('count effect');
    document.title = count;
  }, [count]);
  // 通过设置useEffect第二参数来决定是否需要执行effect,count如果未变化 则不执行

  return (
    <div style={{padding: 20}}>
      <p>{ count }</p>
      <p>
        Window size:
        {`width: ${windowSize.width}px, height: ${windowSize.height}`}px
      </p>
      <button onClick={() => {setCount(count + 1 ); }}>Add</button>
    </div>
  );
};

export default HooksDemo;