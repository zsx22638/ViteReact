// import Home from "./Componets/HomeStyle/homeStyle.jsx";
import {Test1,Test2,Test3} from "./Componets/效率/Test";
import Count from "./Componets/Count/Count";
import Change from "./Componets/切换效果/Change";
import List from "./Componets/数据传递/dataProps";
import DataTransfer from "./Componets/子传父/Child.jsx";
import TestBtn from "./Componets/封装button组件/TestBtn.jsx";
import FormTest from "./Componets/Form元素获取/FormTest.jsx";
import ColorBoard from "./Componets/调色板/index.jsx";
import ReduxTest from "./Componets/redux测试/index.jsx";
import {BrowserRouter as Router, Routes, Route, RouterProvider,Link} from "react-router-dom";
import Home from "./pages/home/index.jsx"
import Login from "./pages/login/index.jsx"
import router from "./route/index.jsx";

//基础测试组件
// export default function App() {
//     return (
//         <div className="App">
//             {/*<Gallery />*/}
//             {/*<Test1 name="测试一" />*/}
//             {/*<Test2 name="测试二" />*/}
//             {/*<Test3 name="测试三"/>*/}
//             {/*<Count />*/}
//             {/*  <Change />*/}
//
//             {/*<List*/}
//             {/*    msg={"父组件传过来的数据"}*/}
//             {/*    fn={(data) => {*/}
//             {/*        console.log("子组件调用父组件的方法,",data);*/}
//             {/*    }}*/}
//             {/*    obj={{ name: "测试对象", age: 18 }}*/}
//             {/*    arr={[1, 2, 3]}*/}
//             {/*    bool={true}*/}
//             {/*    num={10}*/}
//             {/*    jsxTest={<span>测试JSX</span>}*/}
//             {/*><h3>测试children</h3></List>*/}
//
//
//             {/*<DataTransfer />*/}
//
//             {/*<TestBtn />*/}
//
//             {/*<FormTest />*/}
//
//             {/*<ColorBoard />*/}
//
//             {/*<ReduxTest />*/}
//         </div>
//     );
// }

// function Profile() {
//     return (
//         <img
//             src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1s8vLp.img?w=640&h=558&m=6"
//             alt="Katherine Johnson"
//         />
//     );
// }

// export function Gallery() {
//     return (
//         <section>
//             <h1>了不起的科学家</h1>
//             <Profile />
//             <Home />
//             <h1 className="homeStyle">测试样式</h1>
//         </section>
//     );
// }

//传统路由写法
// function App() {
//     return (
//         <Router>
//             <nav>
//                 {/* 使用 <Link> 组件进行内部路由导航 */}
//                 <Link to="/">首页</Link>
//                 <Link to="/home">首页</Link>
//                 <Link to="/login">登录</Link>
//             </nav>
//             {/*下面相当于是路由出口*/}
//             <Routes>
//                 <Route path="/" element={<Home />} />       {/* 使用 element 渲染组件 */}
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//             </Routes>
//         </Router>
//     );
// }

//新路由写法
function App() {
    return (
       <RouterProvider router={router}/>
    );
}

export default App;

//路由笔记
// BrowserRouter：继续用于简单的路由配置，是大多数应用的首选。
// RouterProvider：适用于需要高级路由功能的场景，比如数据加载和错误处理。

