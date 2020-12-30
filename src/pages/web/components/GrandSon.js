/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:45
 * @LastEditTime: 2020-11-11 10:03:33
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

  const [{ age }] = useConnect(mapPropsToState);

  const onClick1 = (e) => {
    console.log('e: 3 ', e.stopPropagation());
    e.stopPropagation();
    e.preventDefault();
    console.log('e: 4 ', e);
  };

  const load = (e) => {
    console.log('e: 3', e);
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    console.log('e: 4', e);
    window.location.href = 'https://www.baidu.com';
  }

  return (
    <div style={{
      border: '1px solid green',
      width: '60%',
      margin: '50px',
      padding: '10px',
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
    }}>
      <span>孙组件,获取传递下来的值:{age}</span>
      <a onClick={load}>测试</a>
    </div>
  );
}

export default GrandSon;