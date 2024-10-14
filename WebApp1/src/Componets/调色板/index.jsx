import React from 'react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // 导入Toastify的样式


function  ColorBoard() {
    const [rgb, setRGB] = React.useState({r: 0, g: 0, b: 0});

    // 计算颜色值
    const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // 处理进度条变化
    const handleChange = (color, value) => {
        setRGB({
            ...rgb, // 保留其他颜色的值
            [color]: Number(value) // 更新特定的颜色值
        });
        console.log(rgb);
    };

    const notify = () => toast('调色板调色成功');

    return (
        <div>
            <div className="container">
                <div className="disColor" style={{backgroundColor: rgbColor}} onClick={notify}>我是颜色显示板</div>

                <label htmlFor="red">Red:</label>
                <input type="range" id="red" min="0" max="255" value={rgb.r}
                       onChange={(e) => handleChange('r', e.target.value)}/><br/>

                <label htmlFor="green">Green:</label>
                <input type="range" id="green" min="0" max="255" value={rgb.g}
                       onChange={(e) => handleChange('g', e.target.value)}/><br/>

                <label htmlFor="blue">Blue:</label>
                <input type="range" id="blue" min="0" max="255" value={rgb.b}
                       onChange={(e) => handleChange('b', e.target.value)}/><br/>
            </div>
            {/* 在这里设置全局配置 */}
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                // theme="dark"
            />
        </div>
    );
}

export default ColorBoard;
