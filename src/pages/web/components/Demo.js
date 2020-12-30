/*
 * @Author: LD
 * @Date: 2020-11-13 11:47:03
 * @LastEditTime: 2020-11-13 11:58:03
 * @LastEditors: LD
 * @FilePath: /webpack_demo/src/pages/web/components/Demo.js
 * @Description:
 */
// import React from 'react';

// export default class Demo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     console.log('React cdm');
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div onClick={this.onClick}>
//         this is a demo!!!! {count}
//       </div>
//     );
//   }
// }

// import React, { useState, useMemo } from 'react';

// export default function WithMemo() {
//   const [count, setCount] = useState(1);
//   const [val, setValue] = useState('');
//   const expensive = useMemo(() => {
//     console.log('compute');
//     let sum = 0;
//     for (let i = 0; i < count * 100; i++) {
//       sum += i;
//     }
//     return sum;
//   }, [count]);

//   return (
//     <div>
//       <h4>{count}-{expensive}</h4>
//       {val}
//       <div>
//         <button onClick={() => setCount(count + 1)}>ADD</button>
//         <input value={val} onChange={event => setValue(event.target.value)} />
//       </div>
//     </div>
//   );
// }



import React, { useState, useCallback, useEffect } from 'react';

const set = new Set();

export default function Callback() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  const callback = useCallback(() => {
    console.log(count);
    set.add(callback);
    console.log('callback: ', callback);
  }, [count]);


  return (
    <div>
      <h4>{count}</h4>
      <Child callback={callback} />
      <h4>{set.size}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={event => setVal(event.target.value)} />
      </div>
    </div>
  );
}

function Child({ callback }) {
  const [count, setCount] = useState(() => callback());
  useEffect(() => {
    setCount(callback());
  }, [callback]);
  return <div>
    {count}
  </div>
}
