import {useState} from 'react';

export default function UseStateExample(){
  const [count, setcount] = useState(0);

  return(
    <div style={{backgroundColor:'red',padding:'10px'}}>
      <div>use_state_demo</div>
      <p>点击{count}</p>
      <button onClick={()=>setcount(count+1)}>点击</button>
    </div>
  )
}