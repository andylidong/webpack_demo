/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:45
 * @LastEditTime: 2020-11-10 09:21:54
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/GrandSon.js
 * @Description: 
 */
import React from 'react';
import { useConnect } from '@src/hook/useRedux';


const mapPropsToState = ({ age }) => {
  return { age };
};

const GrandSon = () => {

  const [state] = useConnect(mapPropsToState);

  const { age } = state || {};
  return (
    <div style={{
      border: '1px solid green',
      width: '60%',
      margin: '50px',
      textAlign: 'center'
    }}>
      <p>孙组件,获取传递下来的值:{age}</p>
    </div>
  );
}

export default GrandSon;