import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { DynamicCreate, Title } from '@components';

const App = () => (
  <>
    <Title title="app" />
    <DynamicCreate />
    <Welcome />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));