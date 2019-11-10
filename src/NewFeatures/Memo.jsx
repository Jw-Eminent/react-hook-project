import React, { Component, memo, PureComponent } from 'react';

// memo 为函数型组件提供PureComponent同样的功能
// memo PureComponent 只会对复杂对象做浅层对比
// memo 可将自定义的比较函数通过第二个参数传入来实现控制对比的过程
// 所以当对象内部属性变化 不会触发re-render 当传入内联函数时 总会re-render 建议使用箭头函数
const MemoFoo = memo((props) => {
  console.log('render memo foo');
  return <div>{props.name}</div>;
});

class Foo extends PureComponent {
  render() {
    console.log('render');
    return (
      <div>{this.props.count}</div>
    );
  }
}

class Demo extends Component {
  state = {
    count: 0,
    person: {
      name: 'jwwang',
      age: 18
    }
  };

  handleCountChange = () => {
    const { count } = this.state;
    this.setState({count: count + 1});
  }

  handlePersonChange = () =>{
    const { person } = this.state;
    person.age  = person.age + 1;
    this.setState({person});
  }

  render() {
    const { person, count } = this.state;
    return (
      <div>
        <button onClick={this.handleCountChange}>Add</button>
        <button onClick={this.handlePersonChange}>Add Age</button>
        <div>{`count: ${count}, person: ${person.name}, age: ${person.age}`}</div>
        <Foo person={person}/>
        <MemoFoo name="jwwang"/>
      </div>
    );
  }
}

export default Demo;