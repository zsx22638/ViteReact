//普通函数组件
import {Component} from "react";

function  Test1(props){
    return <div>{props.name}</div>;
}
//箭头函数组件
const Test2 = (props) => {
    return <div>{props.name}</div>;
};

//类组件
class Test3 extends Component{
    render(){
        return (<div>{this.props.name}</div>);
    }
}

export {Test1, Test2, Test3};