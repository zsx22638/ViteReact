import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';


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
]);

// 路由提供器
export default router;
