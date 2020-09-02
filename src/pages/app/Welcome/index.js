import React, { useState, useEffect, useReducer, memo } from 'react';
import './index.css';

const Welcome = () => {
  const [count, setCount] = useState(0);

  // const [count1, dispatch] = useReducer(reducer, 0);

  // function reducer(state, action) {
  //   console.log('state: ', state);
  //   if (action.type === 'tick') {
  //     return ++state;
  //   } else {
  //     throw new Error();
  //   }
  // }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     dispatch({ type: 'tick' });
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  // 模拟cdm的声明周期
  useEffect(() => {
    console.log(`0 You clicked ${count} times`);
  }, []);

  useEffect(() => {
    // const id = setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);
    // return () => clearInterval(id);
  }, [count]);

  // 模拟cwm的声明周期
  useEffect(() => {
    console.log(`1 You clicked ${count} times`);
  }, [count]);


  // useRef 获取最新的数据值
  useEffect(() => {
    console.log(`2 You clicked ${count} times`);
    // ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
    // 模拟cwum的声明周期
    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>

      {/* <p>You clicked1 {count1} times</p> */}


      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// memo PureComponent的作用 浅比较
export default memo(Welcome);