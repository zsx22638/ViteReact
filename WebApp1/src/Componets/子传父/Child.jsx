// 子组件可以传递多种类型的数据给父组件，包括基本类型（字符串、数字、布尔值）、引用类型（对象、数组）以及函数。
// 使用传递回调函数的方式，可以灵活地实现子组件向父组件的双向数据流


import {useState} from 'react';
function Child1(props) {
  return (
    <div>
        <input type="text" onChange={(e) => props.handleClick(e.target.value)}/>
      <button onClick={() => props.handleClick('Hello World')}>点击</button>
    </div>
  );
}

function Child2(props) {
    return (
        <div>{"我是兄弟组件"+props.msg}</div>
    );
}
function Parent() {
    const [message, setMessage] = useState('');
    const handleClick = (msg) => {
        setMessage(msg);
    };
    return (
        <div>
            <h1>{message}</h1>
            <Child1 handleClick={handleClick}/>
            <Child2 msg={message}/>
        </div>
    );
}

function DataTransfer() {
    return (
        <div>
            <Parent />
        </div>
    );
}

export default DataTransfer;
