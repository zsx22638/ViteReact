import Home from "./Componets/HomeStyle/homeStyle.jsx";
import {Test1,Test2,Test3} from "./Componets/效率/Test";
import Count from "./Componets/Count/Count";
import Change from "./Componets/切换效果/Change";
import List from "./Componets/数据传递/dataProps";
import DataTransfer from "./Componets/子传父/Child.jsx";
import TestBtn from "./Componets/封装button组件/TestBtn.jsx";
import FormTest from "./Componets/Form元素获取/FormTest.jsx";
import ColorBoard from "./Componets/调色板/index.jsx";
import ReduxTest from "./Componets/redux测试/index.jsx";

export default function App() {
    return (
        <div className="App">
            {/*<Gallery />*/}
            {/*<Test1 name="测试一" />*/}
            {/*<Test2 name="测试二" />*/}
            {/*<Test3 name="测试三"/>*/}
            {/*<Count />*/}
            {/*  <Change />*/}

            {/*<List*/}
            {/*    msg={"父组件传过来的数据"}*/}
            {/*    fn={(data) => {*/}
            {/*        console.log("子组件调用父组件的方法,",data);*/}
            {/*    }}*/}
            {/*    obj={{ name: "测试对象", age: 18 }}*/}
            {/*    arr={[1, 2, 3]}*/}
            {/*    bool={true}*/}
            {/*    num={10}*/}
            {/*    jsxTest={<span>测试JSX</span>}*/}
            {/*><h3>测试children</h3></List>*/}


            {/*<DataTransfer />*/}

            {/*<TestBtn />*/}

            {/*<FormTest />*/}

            {/*<ColorBoard />*/}

            <ReduxTest />
        </div>
    );
}


function Profile() {
    return (
        <img
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1s8vLp.img?w=640&h=558&m=6"
            alt="Katherine Johnson"
        />
    );
}

export function Gallery() {
    return (
        <section>
            <h1>了不起的科学家</h1>
            <Profile />
            <Home />
            <h1 className="homeStyle">测试样式</h1>
        </section>
    );
}


