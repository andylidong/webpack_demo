import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { add } from '@utils/common';
import { Title, DynamicCreate, Image } from '@components';

const welcomeImage = require('../../assets/andy.jpg');

const App = () => (
  <>
    <Title title={`web ${add([1, 2, 3, 4, 5])}`} />
    <DynamicCreate />
    <Image className="image" src={welcomeImage} style={{ width: 500, height: 500 }} />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'))