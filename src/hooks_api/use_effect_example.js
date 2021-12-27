import { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [count, setcount] = useState(0)
  const [nowTime, setnowTime] = useState(new Date())
  const btnClick = () => {
    setcount(count + 1)
  }

  // 参数二传入[count]
  useEffect(() => {
    console.log(`执行了`, '执行了Useeffect')
    document.title = `点击了{count}次`
  },[count])

  // 参数二传入[]空数组代表只执行一次
  useEffect(() => {
    console.log(`执行了`, '执行了Useeffect2')
    document.title = `点击了{count}次`
  }, []);

  // 只在页面退出时执行return代码，参数二传入[]空数组代表只执行一次
  useEffect(() => {
    let timer = setInterval(() => {
      setnowTime(new Date())
    }, 1000);
    console.log(`执行了`, '执行了Useeffect')
    document.title = `点击了{count}次`
    return () => {
      clearInterval(timer);
      console.log(`clearEffect`, 'clearEffect')
    }
  }, [])
  return (
    <div style={{ backgroundColor: 'green' }}>
      <div>use_effect_example</div>
      <p>点击{count}次</p>
      <div>{nowTime.toString()}</div>
      <button onClick={btnClick}>点击</button>
    </div>
  )
}