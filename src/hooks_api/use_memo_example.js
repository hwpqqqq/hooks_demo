import { useMemo, useState } from "react";

//useMemo主要用来解决使用 React hooks 产生的无用渲染的性能问题。
export default function UseMemoExample() {
  const [xiaohong, setXiaohong] = useState('小红等待状态')
  const [xiaoming, setXiaoming] = useState('小明等待状态')
  return (
    <div>
      <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
      <button onClick={() => { setXiaoming(new Date().getTime() + '小明跳舞了') }}>小明</button>
      <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
    </div>
  )
}

function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log(`小红跳舞了`, '小红跳舞了')
    return name + '小红跳舞了'
  }

  // useMemo自动检测name数据是否变化，如果有变化则调用changeXiaohong [name]监听的是name
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])

  // 没有使用useMemo，不管name的数据有没有变化，都会调用changeXiaohong函数
  // const actionXiaohong=changeXiaohong(name)
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  )
}