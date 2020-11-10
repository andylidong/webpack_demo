/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:31
 * @LastEditTime: 2020-11-10 09:19:42
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/Son.js
 * @Description: 
 */
import React from 'react';
import GrandSon from "./GrandSon";

import { useConnect } from '@src/hook/useRedux';


const mapPropsToState = ({ name, age }) => {
  return { name, age };
};

const Son = () => {
  const [state, dispatch] = useConnect(mapPropsToState);
  const { name, age } = state || {};
  const onClick = () => dispatch({ type: 'ADD' })
  return (
    <div style={{
      border: '1px solid blue',
      width: '60%',
      margin: '20px',
      padding: '10px',
      background: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} onClick={onClick}>
      <p>子组件，获取父组件的值:{name}，{age}</p>
      <GrandSon />
    </div>
  );
}

export default Son;