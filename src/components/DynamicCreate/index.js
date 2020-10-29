/*
 * @Author: LD
 * @Date: 2020-08-19 16:30:36
 * @LastEditTime: 2020-10-29 11:39:57
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/components/DynamicCreate/index.js
 * @Description: 
 */
async function create() {
  const { default: _ } = await import('lodash');
  let element = document.createElement('p');
  element.innerHTML = _.join(['Andy', 'Lee'], '-');
  return element;
}

function DynamicCreate(props) {
  const { setState, state } = props;
  document.addEventListener('click', () => {
    if (setState) {
      setState({ name: 'ld1', age: state.age + 20 });
    }
    create().then(element => document.querySelector('#root').appendChild(element));
  });
  return null;
}

export default DynamicCreate;