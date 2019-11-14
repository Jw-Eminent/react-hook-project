import React, { useState, useMemo, useCallback, memo } from 'react';

// useMemo useCallback

const Foo = memo((props) => {
  console.log('Foo render', props.name);
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
});

const HooksDemo = (props) => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(100);

  const handleAddClick = () => {
    setCount(count + 1);
  }

  const handleMinClick = () => {
    setAnotherCount(anotherCount - 1);
  }

  // 将当前方法以props传给Foo 每次父组件更新都会触发Foo更新 因为函数组件中每次重新渲染
  // handleClickToConsole都会是一个新的函数
  const handleClickToConsole = () => {
    console.log('I am Foo1');
  }

  // useCallback 根据依赖返回一个函数 依赖不变 则返回的函数不变 反则返回新的函数
  const handleClickToConsole_useCallback = useCallback(() => {
    console.log('I am Foo2');
  }, []);

  const handleClickToConsole_useMemo = useMemo(() => {
    return () => {
      console.log('I am Foo2');
    }
  }, []);

  // 根据count的值是否变化来决定是否返回新的函数
  const handleClickToConsole_useCallback_dep = useCallback(() => {
    console.log('I am Foo3', count);
  }, [count]);

  const handleClickToConsole_useMemo_dep = useMemo(() => {
    return () => {console.log('I am Foo3', count);}
  }, [count]);

  // useMemo 是在渲染期间完成的 返回的值可以参与渲染
  // 根据依赖来决定这段逻辑是否执行
  // 如果useMemo返回的是函数 则useMemo(() => fn, [...]) <==> useCallback(fn, [...])
  const doubleCount = useMemo(() => count * 2, [count === 3]);

  const handleClickToConsole_useCallback_dep2 = useCallback(() => {
    console.log('I am Foo4', doubleCount);
  }, [doubleCount]);

  return (
    <div>
      <p>count: {count}</p>
      <p>anotherCount: {anotherCount}</p>
      <p>double: {doubleCount}</p>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleMinClick}>Min</button>
      <Foo onClick={handleClickToConsole} name="foo1"/>
      <Foo onClick={handleClickToConsole_useMemo} name="foo2"/>
      <Foo onClick={handleClickToConsole_useMemo_dep} name="foo3"/>
      <Foo doubleCount={doubleCount} name="foo4" onClick={handleClickToConsole_useCallback_dep2}/>
    </div>
  );
};

export default HooksDemo;