import React, { useImperativeHandle, useRef, forwardRef} from 'react';

function UseImperativeHandleExample(){
   const childRef = useRef();
   const btnFn = () => {
      console.log('childRef=', childRef);
      console.log(`childref`, childRef.current.value())
      childRef.current.focus();
  }
  return (
    <div>
      <button onClick={() => {btnFn()}}>获取子组件input的焦点</button>
      <hr/>
      <Child ref = {childRef}/>
    </div>
  )
}


// 暴露组件属性便于父组件调用
function Child(props, ref){
  const InputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => InputRef.current.focus(),
    value: () => InputRef.current.value,
  }))

  return (
    <div>
      <input ref={InputRef}/>
    </div>
  )
}

Child = forwardRef(Child);

export default UseImperativeHandleExample;
