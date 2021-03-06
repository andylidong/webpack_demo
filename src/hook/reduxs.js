/*
 * @Author: LD
 * @Date: 2020-10-28 16:19:42
 * @LastEditTime: 2020-11-09 17:38:24
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/reduxs.js
 * @Description:  
 * 
 * 横推武道
 * 我能看见正确姿势
 * 极拳暴君
 * 没有人比我更懂缝合
 * 横推从极道开始
 * 
 * 介绍
 * 项目 
 * 
 * 
 * 
 * 
 */
import React, { useState } from 'react';

export const { Provider, Consumer } = React.createContext();

export const connect = (mapPropsToState) => Component => () => {
  const [state, setState] = useState(null);
  return (
    <Consumer>
      {
        (store) => {
          const { getState, dispatch, addSubscriber } = store;
          addSubscriber((data) => setState(data));
          return <Component {...mapPropsToState(state || getState())} dispatch={dispatch} />;
        }
      }
    </Consumer>
  );
}

export const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l(state));
  }
  const addSubscriber = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l != listener)
    }
  }
  const removeSubscriber = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l != listener)
    }
  }
  dispatch('');
  return {
    getState, dispatch, addSubscriber, removeSubscriber
  }
}

