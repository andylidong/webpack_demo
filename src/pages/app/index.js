import React, { useState, useEffect, Suspense } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { Title } from '@components';

const Lazys = React.lazy(() => import('./Lazys'));


const App = () => {

  // const [data, setData] = useState({ data: { data: 111 } });
  const [data, setData] = useState(111);

  // useEffect(() => setData({ data: { data: 222 } }), []);
  useEffect(() => setData(222));

  return (
    <div>
      <Title />
      <Suspense fallback={<div>Loading...</div>}><Lazys /></Suspense>
      <Welcome data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));