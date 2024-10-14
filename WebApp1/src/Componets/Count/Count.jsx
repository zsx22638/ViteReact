import {Component} from "react";

class Count extends Component {
    //state声明的2种形式
    // state = {
    //     count: 0
    // }
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    add() {
        console.log("add",this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>+1</button>
                <button onClick={this.add}>调用原型的方法！</button>
                <button onClick={() => {
                    console.log("箭头函数",this);
                }}>调用箭头函数！</button>
            </div>
        )
    }
}

export default Count;