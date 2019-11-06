// Context
/**
 * 定义: Context提供了一种方式，能够让数组在组件树中传递而不必一级一级手动传递
 * 结构: Context实例对象派生出两个react组件<Provider> <Consumer>
 */
import React, { Component, createContext } from 'react';

// 创建Context实例对象，可传入一个默认值，当Context.Comsumer未找到对应得Provider时
// 默认值作为获取到的value，Context对象可以使用多个，但最好只使用一个在同一个组件中
const BatteryContext = createContext(90);
const OnlineContext = createContext(false);

class Leaf extends Component {
  // 通过设置contextType 使得当前组件获得一个新的属性context 
  // 它的值就是contextType指向的context实例对象的provider的value
  static contextType = BatteryContext;

  render() {
    const contextTypeBattery = this.context;
    return (
      // Consumer中只能有一个子元素并且为函数 用来获取provider中提供的参数值
      <React.Fragment>
        <BatteryContext.Consumer>
          {
            battery => (
              <OnlineContext.Consumer>
                {
                  online => <span>Battery: {battery}, Online: {String(online)}</span>
                }
              </OnlineContext.Consumer>
            )
          }
        </BatteryContext.Consumer>
        <p>Battery: {contextTypeBattery}</p>
      </React.Fragment>
    );
  }
}

const Middle = () => <Leaf />;

class Context extends Component {
  state = {
    battery: 10,
    online: false
  };

  handleBatteryChange = () => {
    const { battery } = this.state;
    this.setState({
      battery: battery + 10
    });
  }

  handleSwitch = () => {
    const { online } = this.state;
    this.setState({
      online: !online
    });
  }

  render() {
    const { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <Middle />
          <button onClick={this.handleBatteryChange}>+</button>
          <button onClick={this.handleSwitch}>switch</button>
        </OnlineContext.Provider>
      </BatteryContext.Provider> 
    );
  }
};

export default Context;