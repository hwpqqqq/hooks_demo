import React,{useContext,useState} from "react";
import UseContextOutChild from "./use_context_out_child";

let themes={
  light:{
    color:'#ddd',
    background:'yellow'
  },
  dark:{
    color:'#ffffff',
    background: '#333333'
  }
}

const ThemeContext=React.createContext();

export default function UseContextExample(){
// const [themes, settheme] = useState(themes)

  return (
    // 上下文数据提供，以下子组件均可获取上下文的数据
    <ThemeContext.Provider value={themes.dark} style={{padding:'10px'}}>
      {/* <div onClick={()=>{settheme({light:{color:'blue',background:'pink'}})}}>点击改变outChild的theme</div> */}
      <Father></Father>
      <div style={{height:'40px',backgroundColor:'white'}}></div>
      <UseContextOutChild theme={ThemeContext}></UseContextOutChild>
    </ThemeContext.Provider>
  )
  
}
function Child(){
  const theme=useContext(ThemeContext);
  return(
    <div style={{color:theme.color,background:theme.background}}>
       子组件
    </div>
  )
}

function Father(){
  const theme=useContext(ThemeContext);
  return(
    <div style={{color:theme.color,background:theme.background,padding:'10px'}}>
      Father组件
      <Child></Child>
    </div>
  )
}