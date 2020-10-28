/*
 * @Author: LD
 * @Date: 2020-10-28 16:19:42
 * @LastEditTime: 2020-10-28 17:24:35
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/reduxs.js
 * @Description: 
 */
import React from 'react';

export const { Provider, Consumer } = React.createContext();

export const connect = (mapPropsToState) => Component => {
  return () => (
    <Consumer>
      {
        (state) => <Component {...mapPropsToState(state)} />
      }
    </Consumer>
  );
};

