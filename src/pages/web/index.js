/*
 * @Author: LD
 * @Date: 2020-08-24 11:14:32
 * @LastEditTime: 2020-11-10 16:26:15
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/index.js
 * @Description: 
 */
import React from 'react';
import './index.css';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import Son from './components/Son';

import { usePrivider } from '@src/hook/useRedux';

const initialState = { name: 'ld', age: 20 };

const actions = { ADD: 'ADD' };

const reducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case actions.ADD:
      let { age, name } = state;
      age++;
      name = `${name}1`
      return { ...state, age, name };
    default:
      return state;
  }
}


const TestRedux = () => {
  return (
    <div style={{
      border: '1px solid red',
      width: '60%',
      margin: '20px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <Button type="primary">{'测   试'}</Button>
      <p>父组件定义的值:{initialState.name}</p>
      <Son />
    </div>
  );
}

const App = () => usePrivider(reducer, <TestRedux />);

ReactDOM.render(<App />, document.querySelector('#root'))