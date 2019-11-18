import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.jsx';
// import Context from '../src/NewFeatures/Context';
// import LazyLoadDemo from '../src/NewFeatures/LazyAndSuspense';
// import MomoDemo from '../src/NewFeatures/Memo';
// import HooksDemo from './NewFeatures/Hooks_day1';
// import HooksDay2Demo from './NewFeatures/Hooks_day2';
// import HooksDay21Demo from './NewFeatures/Hooks_day2_1';
// import HooksDay31 from './NewFeatures/Hooks_day3_1';
// import HooksDay32 from './NewFeatures/Hooks_day3_2';
import TodoList from './TodoList/TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
serviceWorker.unregister();
