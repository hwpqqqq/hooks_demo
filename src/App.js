import logo from './logo.svg';
import './App.css';
import UseStateExample from './hooks_api/use_state_example';
import UseEffectExample from './hooks_api/use_effect_example';
import { Link, Route, Routes } from 'react-router-dom';
import UseContextExample from './hooks_api/use_context/use_context_example';
import UseReducerExample from './hooks_api/use_reducer_example'
import UseReferExample from './hooks_api/use_refer_example'
import UseCallbackExample from './hooks_api/use_callback_example'
import UseMemoExample from './hooks_api/use_memo_example';
import UseLayoutEffectExample from './hooks_api/use_layout_effect_example';
import UseImperativeHandleExample from './hooks_api/use_imperative_handle_example'

function App() {
  return (
    <div>
      <div className="App" style={{display:'flex',flexDirection:'row',padding:'10px'}}>
        <Link style={{flex:1}} to='/state'>to useStateExample</Link>
        <Link style={{flex:1}} to='/effect'>to useEffectExample</Link>
        <Link style={{flex:1}} to='/context'>to useContext</Link>
        <Link style={{flex:1}} to='/reducer'>to useReducer</Link>
        <Link style={{flex:1}} to='/refer'>to useRefer</Link>
        <Link style={{flex:1}} to='/callback'>to useCallback</Link>
        <Link style={{flex:1}} to='/memo'>to useMemo</Link>
        <Link style={{flex:1}} to='/layoutEffect'>to useLayoutEffect</Link>
        <Link style={{flex:1}} to='/useImperativeHandle'>to useImperativeHandle</Link>
      </div>
      <Routes>
        <Route path='/state' element={<UseStateExample />}></Route>
        <Route path='/effect' element={<UseEffectExample />}></Route>
        <Route path='/context' element={<UseContextExample />}></Route>
        <Route path='/reducer' element={<UseReducerExample />}></Route>
        <Route path='/refer' element={<UseReferExample />}></Route>
        <Route path='/callback' element={<UseCallbackExample />}></Route>
        <Route path='/memo' element={<UseMemoExample />}></Route>
        <Route path='/layoutEffect' element={<UseLayoutEffectExample />}></Route>
        <Route path='/useImperativeHandle' element={<UseImperativeHandleExample />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
