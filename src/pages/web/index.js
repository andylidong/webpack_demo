/*
 * @Author: LD
 * @Date: 2020-08-24 11:14:32
 * @LastEditTime: 2020-10-29 11:40:45
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/index.js
 * @Description: 
 */
import React, { useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { add } from '@utils/common';
import Son from './components/Son';
import { Title, DynamicCreate, Image } from '@components';

import { Provider } from './reduxs';

const welcomeImage = require('../../assets/andy.jpg');

const initialState = { name: 'ld', age: 20 };

const TestRedux = (data) => {
  const { state } = data;
  return (
    <div style={{ border: '1px solid red', width: '60%', margin: '20px auto', textAlign: 'center' }}>
      <p>父组件定义的值:{state.name}</p>
      <Son />
    </div>
  );
}

const App = () => {

  const [state, setState] = useState(initialState)

  return (
    <Provider value={state}>
      <Title title={`web ${add([1, 2, 3, 4, 5])}`} />
      <DynamicCreate setState={setState} state={state} />
      <TestRedux state={state} />
      <Image className="image" src={welcomeImage} style={{ width: 500, height: 500 }} />
    </Provider >
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))