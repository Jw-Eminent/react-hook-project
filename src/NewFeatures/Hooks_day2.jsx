import React, { useContext, useState,  createContext, Component } from 'react';

const CountContext = createContext();

// 对照1 context
class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          (count) => (
            <div>context: {count}</div>
          )
        }
      </CountContext.Consumer>
    );
  }
}

// 对照2 contextType
class Bar extends Component {
  static contextType = CountContext; // contextType是一个静态属性 static
  render() {
    return (
      <div>contextType: {this.context}</div>
    );
  }
}

// useContext

const Counter = () => {
  const count = useContext(CountContext);
  return (
    <div>useContext: {count}</div>
  );
};

const HooksDay2Demo = (props) => {
  const [count, setCount] = useState(props.count || 1);
  return (
    <div style={{padding: 10}}>
      <p>Count: {count}</p>
      <button onClick={() => {setCount(count + 1); }}>add</button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </div>
  );
};

export default HooksDay2Demo;