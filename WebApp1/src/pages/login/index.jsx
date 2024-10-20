import React from 'react';
import {useLoaderData, useNavigate, useParams, useSearchParams} from 'react-router-dom';
//编程式路由

function Login() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/home',{
            state: {
                name:'张三',
                age:18
            }
        });
    };
    //URl传参
    const { id } = useParams()
    //Search传参
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    //loader动态传参
    const data = useLoaderData() || {};
    const { TestKey,component:Home } = data;

    return (
        <div>
            <div>Login</div>
            <button onClick={handleNavigate}>编程式到home页面</button>
            {id && <div>URL传参 id:{id}</div>}
            {name && <div>Search传参 name:{name}</div>}
            {TestKey && <div>loader动态传参 TestKey:{TestKey}</div>}
            {Home && <div>loader动态传参 Home:<Home/></div>}
        </div>
    );
}

export default Login;