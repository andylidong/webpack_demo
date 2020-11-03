/*
 * @Author: LD
 * @Date: 2020-10-28 16:19:42
 * @LastEditTime: 2020-11-03 16:42:46
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/reduxs.js
 * @Description: 
 */
import React, { useState } from 'react';

export const { Provider, Consumer } = React.createContext();

export const connect = (mapPropsToState) => Component => () => {
  const [state, setState] = useState(null);
  return (
    <Consumer>
      {
        (store) => {
          const { getState, dispatch, subscribe } = store;

          subscribe((data) => setState(data));

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
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l != listener)
    }
  }
  dispatch();
  return {
    getState, dispatch, subscribe
  }
}

