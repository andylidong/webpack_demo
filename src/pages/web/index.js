/*
 * @Author: LD
 * @Date: 2020-08-24 11:14:32
 * @LastEditTime: 2020-10-28 11:39:05
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/index.js
 * @Description: 
 */
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { add } from '@utils/common';
import { Title, DynamicCreate, Image } from '@components';
import { Button } from 'antd';

const welcomeImage = require('../../assets/andy.jpg');

const App = () => (
  <>
    <Title title={`web ${add([1, 2, 3, 4, 5])}`} />
    <DynamicCreate />
    <Button type={'primary'} size={'large'}>
      测试
    </Button>
    <Image className="image" src={welcomeImage} style={{ width: 500, height: 500 }} />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'))