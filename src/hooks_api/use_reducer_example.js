import { useReducer } from "react";

const init = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'minus':
      return { count: state.count - 1 }
    default:
      break;
  }
};

export default function UseReducerExample() {
  // 数据经过处理后再更新视图，useState是直接改变后立即更新视图
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div style={{ padding: '20px', backgroundColor: 'skyblue', fontSize: '30px',display:'flex' }}>
      <div button onClick={() => { dispatch({ type: 'minus' }) }}>-</div>
      <div style={{paddingLeft:'20px',paddingRight:'20px'}}> count:{state.count} </div>
      <div button onClick={() => { dispatch({ type: 'add' }) }}>+</div>
    </div>
  )
}
