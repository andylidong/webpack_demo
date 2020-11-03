/*
 * @Author: LD
 * @Date: 2020-08-24 11:14:32
 * @LastEditTime: 2020-11-03 16:31:17
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/index.js
 * @Description: 
 */
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Son from './components/Son';

import { Provider, createStore } from './reduxs';

const initialState = { name: 'ld', age: 20 };

const actions = { ADD: 'ADD' };

const reducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case actions.ADD:
      let { age, name } = state;
      age++;
      name = `${name} ${age}`
      return { ...state, age, name };
    default:
      return state;
  }
}


const TestRedux = () => {
  return (
    <div style={{ border: '1px solid red', width: '60%', margin: '20px auto', textAlign: 'center' }}>
      <p>父组件定义的值:{initialState.name}</p>
      <Son />
    </div>
  );
}

const App = () => {
  return (
    <Provider value={createStore(reducer)}>
      <TestRedux />
    </Provider >
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))