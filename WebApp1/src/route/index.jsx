import { createBrowserRouter, RouterProvider,createHashRouter } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from "../pages/layout/index.jsx";
import Child2 from "../pages/child2/index.jsx";
import Child1 from "../pages/child1/index.jsx";
import NotFound from "../pages/404/index.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />, // 错误边界  当发生错误时返回这个组件
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        // 同时符合URL参数，loader传参！
        path: "/login/:id",
        element: <Login />,
        loader:async () => {
            return { TestKey:"loader传参！", component:Home }
        },
    },
    //二级路由  二级路由前面不可以写  /
    {
        path:"/layout",
        element: <Layout />,
        children:[
            //默认二级路由
            {
                index:true,
                element:<Child1 />
            },
            {
                path:"child1",
                element:<Child1 />,
            },
            {
                path:"child2",
                element:<Child2 />,
            }
        ]
    },
    {
        path:"*",
        element:<NotFound />,
    }
]);

// 路由提供器
export default router;
