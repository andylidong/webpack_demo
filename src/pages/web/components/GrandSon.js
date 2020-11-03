/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:45
 * @LastEditTime: 2020-11-03 16:33:05
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/GrandSon.js
 * @Description: 
 */
import React from 'react';
import { connect } from "../reduxs";
const GrandSon = ({ age } = {}) => {
  return (
    <div style={{ border: '1px solid green', width: '60%', margin: '50px auto', textAlign: 'center' }}>
      <p>孙组件,获取传递下来的值:{age}</p>
    </div>
  );
}

const mapStateToProps = ({ age }) => {
  return { age };
};
export default connect(mapStateToProps)(GrandSon);