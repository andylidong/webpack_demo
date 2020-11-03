/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:31
 * @LastEditTime: 2020-11-03 16:12:48
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/Son.js
 * @Description: 
 */
import React from 'react';
import { connect } from "../reduxs";
import GrandSon from "./GrandSon";

const Son = ({ name = '12', age = 20, dispatch } = {}) => {

  const onClick = () => dispatch({ type: 'ADD' })

  return (
    <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }} onClick={onClick}>
      <p>子组件，获取父组件的值:{name}，{age}</p>
      {/* 孙组件内容 */}
      <GrandSon />
    </div>
  );
}

const mapPropsToState = ({ name, age }) => {
  return { name, age };
};

export default connect(mapPropsToState)(Son);