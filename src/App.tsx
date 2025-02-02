import React from 'react';
import './App.css';

// import TodoList from "./components/todolist";
// import ComRight from "./components/comRight";
// import LearnEffect from '../src/components/learnEffect/index';
// import ClearSetInterval from '../src/components/clearSetInterval/index';
// import UseEffectNot2Nest from '../src/components/useEffectNot2Nest/index';
import UseEffectBaseUsage from '../src/components/useEffectBaseUsage/index';

import UseRefCom from '../src/components/useRefCom/index';

function App() {
  return (
    <div className="App">
        {/* redux 的学习*/}
        {/*<TodoList></TodoList>*/}
        {/*<ComRight />*/}

        {/* useEffect的学习 bailing out  */}
        {/*<LearnEffect />*/}

        {/* 学习简单的了解一下组件的卸载与内存泄漏 */}
        {/*<ClearSetInterval/>*/}

        {/* useEffect必须写在函数的第一层 也不能嵌套*/}
        {/*Rendered more hooks than during the previous render.*/}
        {/*<UseEffectNot2Nest/>*/}

        {/*useEffect的基本用法*/}
        {/*<UseEffectBaseUsage/>*/}

        {/*学习useRef*/}
        <UseRefCom/>



    </div>
  );
}

export default App;

