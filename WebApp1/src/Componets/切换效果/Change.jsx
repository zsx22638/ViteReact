import React, { useState } from "react";
import Box from "./Change.module.css";

// 随机颜色函数
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Change = () => {
    const [bgColor, setBgColor] = useState('#000'); // 使用 useState 管理状态

    const onChange = () => {
        setBgColor(getRandomColor()); // 更新背景颜色
    };

    return (
        <div>
            <div
                className={Box.box}
                style={{ backgroundColor: bgColor }} // 动态绑定颜色
                onClick={onChange} // 绑定点击事件
            >
                我是div
            </div>
        </div>
    );
};

export default Change;



//类组件
// import React, { Component } from "react";
// import Box from "./Change.module.css";
//
// // 随机颜色函数
// function getRandomColor() {
//     const letters = '0123456789ABCDEF'; // 定义颜色的可能字符
//     let color = '#'; // 颜色以 "#" 开头
//
//     // 循环 6 次，生成 6 位十六进制数
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]; // 随机选择一个字符
//     }
//
//     return color; // 返回随机颜色
// }
//
// class Change extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bgColor: '#000', // 初始背景颜色
//         };
//     }
//
//     // 点击事件处理函数
//     onChange = () => {
//         this.setState({ bgColor: getRandomColor() }); // 更新背景颜色
//     };
//
//     render() {
//         return (
//             <div>
//                 <div
//                     className={Box.box}
//                     style={{ backgroundColor: this.state.bgColor }} // 动态绑定颜色
//                     onClick={this.onChange} // 绑定点击事件
//                 >
//                     我是div
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Change;
