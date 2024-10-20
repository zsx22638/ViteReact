import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>我是layout</h1>
            <Link to="child1">child1</Link>
            <Link to="child2">child2</Link>
            <Outlet />
        </div>
    );
}

export default Layout;