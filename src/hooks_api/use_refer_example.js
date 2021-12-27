import { useRef } from "react";

export default function UseReferExample(params) {
  // 获取view中的组件
  const InputEl=useRef(null);
  const getInputFocus=()=>{
    InputEl.current.placeholder='输入中'
    InputEl.current.focus()
    InputEl.current.value='hello ref'
  }
  return(
    <div>
      <input ref={InputEl} type='text' placeholder="请输入"/>
      <button onClick={getInputFocus}>useRef</button>
    </div>
  )
};
