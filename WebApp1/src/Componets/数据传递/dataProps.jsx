import {Component} from "react";

class List extends Component {
    render() {
        return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p>{console.log(this.props)}</p>
            <p>{this.props.jsxTest}</p>
            <div>{this.props.children}</div>
            <button onClick={() => {this.props.fn("传递的参数！")}}>通过调用父组件的方法传递数据</button>
            {/*onClick={() => this.props.fn()}：通过箭头函数，只有在按钮被点击时，才会调用 this.props.fn()。*/}
            {/*onClick={this.props.fn}：直接传递函数引用 this.props.fn，React 会在点击按钮时调用该函数，而不会立即执行。*/}
        </div>;
    }
}
export default List;