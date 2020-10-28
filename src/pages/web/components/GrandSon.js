/*
 * @Author: LD
 * @Date: 2020-10-28 16:09:45
 * @LastEditTime: 2020-10-28 17:07:57
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/GrandSon.js
 * @Description: 
 */
import React from 'react';
import { connect } from "../reduxs";
const GrandSon = ({ name = '13' } = {}) => {
  return (
    <div style={{ border: '1px solid green', width: '60%', margin: '50px auto', textAlign: 'center' }}>
      <p>孙组件,获取传递下来的值:{name}</p>
    </div>
  );
}

const mapStateToProps = ({ name }) => {
  return { name };
};
export default connect(mapStateToProps)(GrandSon);