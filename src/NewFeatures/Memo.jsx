import React, { Component, memo, PureComponent } from 'react';

// memo 为函数型组件提供PureComponent同样的功能
// memo 可将自定义的比较函数通过第二个参数传入来实现控制对比的过程
// memo PureComponent 只会对复杂对象做浅层对比
// 所以当对象内部属性变化 不会触发re-render
// 当props为内联函数时 总会re-render 以下方法避免这种情况
// 当父组件是class组件时 使用箭头函数定义方法 将该方法当作props传入子组件
// 当父组件是函数组件时 每一次重新执行 函数作用域里面都是重新开始 所以可以将方法的声明抽到组件外面
// 或者使用uesCallback
const MemoFoo = memo((props) => {
  console.log('render memo foo');
  return <div>{props.person.age}</div>;
});

class Foo extends PureComponent {
  render() {
    console.log('render');
    return (
      <div>{this.props.person.age}</div>
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

  handleClick = () => {}

  render() {
    const { person, count } = this.state;
    return (
      <div>
        <button onClick={this.handleCountChange}>Add</button>
        <button onClick={this.handlePersonChange}>Add Age</button>
        <div>{`count: ${count}, person: ${person.name}, age: ${person.age}`}</div>
        <Foo person={person}/>
        <MemoFoo person={person} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Demo;