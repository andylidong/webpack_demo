/*
 * @Author: LD
 * @Date: 2020-11-09 17:33:19
 * @LastEditTime: 2020-11-10 09:29:35
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/hook/useRedux.js
 * @Description: 
 */

import React, { useContext, useState, useEffect } from 'react';

export const DataContent = React.createContext();


export const usePrivider = (value, children) =>
  <DataContent.Provider value={useStore(value)}> {children}</DataContent.Provider>;


export const useConnect = (mapPropsToState) => {
  const context = useContext(DataContent);
  const { getState, addSubscriber, removeSubscriber, dispatch } = context || {};
  const [state, setState] = useState(getState());
  useEffect(() => {
    addSubscriber((data) => setState(data));
    return () => {
      removeSubscriber((data) => setState(data));
    }
  });
  return [mapPropsToState(state), dispatch];
};


export const useStore = (reducer) => {
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
    listeners.splice(listeners.indexOf(listener), 1);
  }
  dispatch('');
  return {
    getState, dispatch, addSubscriber, removeSubscriber
  }
}