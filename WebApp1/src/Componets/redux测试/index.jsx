//npm install redux react-redux

import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement}  from "../../store/modules/counterStore.js";
import { fetchChannels} from "../../store/modules/channelStore.js";

const ReduxTest = () => {
    const counter = useSelector(state => state.counter.count);
    const { channels, isLoading, error } = useSelector((state) => state.channel);
    console.log(channels);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChannels());
    }, [dispatch]);
    console.log(counter);
    //定义action传参
    const Add = () => {
        dispatch(increment(10));
    }
    const Des = () => {
        dispatch(decrement(10));
    }

    //加载效果
    if (isLoading) {
        return <div>Loading...</div>;
    }
    //错误处理
    if (error) {
        return <div>Error: {error}</div>;
    }
    //渲染
    return (
        <div>
            ReduxTest: {counter}
            <br/>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <button onClick={Add}>+10</button>
            <button onClick={Des}>-10</button>
            <ul>
                {channels.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReduxTest;