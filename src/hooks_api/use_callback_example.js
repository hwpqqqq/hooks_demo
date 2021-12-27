import { useCallback, useState, useEffect } from "react";

export default function UseCallbackExample(params) {
  const [count, setcount] = useState(0)
  const backCount = useCallback(
    () => {
      console.log(`回调的count`, count)
      return count;
    },
    [count],
  )
  return (
    <div>
      <button onClick={() => {
        setcount(count + 1)
        console.log(`count`, count)
      }}>Click me--点击{count}次</button>
      <hr />
      <Child callback={backCount}></Child>
    </div>
  )
};
function Child(props) {
  // 获取父组件的backCount
  const { callback } = props;
  // 监听callback变化
  const [mycount, setMycount] = useState(() => callback())
  useEffect(() => {
    console.log(`childEffect`, 'childEffect')
    // callback()返回count值给myCount
    setMycount(callback())
    // 监听callback变化
  }, [callback])

  return (
    <div>
      <h3>child组件</h3>
      <p>myCount---{mycount}</p>
    </div>
  )
}
