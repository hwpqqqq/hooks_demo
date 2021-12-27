import { useLayoutEffect, useState, useRef, useEffect } from "react";

//useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。
//useEffect 可以满足百分之99的场景，而且 useLayoutEffect 会阻塞渲染，请谨慎使用。
export default function UseLayoutEffectExample(params) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200
      setCount(10 + Math.random() * 200);
      console.log(`useEffect`, 'useEffect')
    }
  }, [count]);

  useLayoutEffect(() => {
    if (count2 === 0) {
      const randomNum2 = 10 + Math.random() * 200
      setCount2(10 + Math.random() * 200);
      console.log(`useLayoutEffect`, 'useLayoutEffect')
    }
  }, [count2]);

  return (
    <div>
      <div onClick={() => setCount(0)}>{count}useEffect</div>
      <div onClick={() => setCount2(0)}>{count2}useLayoutEffect</div>
    </div>

  );


};
