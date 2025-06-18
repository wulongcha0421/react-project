import React from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../views/home';
import Layout from '../layout';
import Login from '../views/login'

const About = React.lazy(() => import('../views/about'));

const router = createBrowserRouter([
  {
    path:'/',
    Component:Login,
  },
  // 布局路由：省略副路由path，不会向URL添加额外路径
  {
    Component:Layout,
    children:[
      {
        path:'home',
        Component:Home,
      },
      {
        path:'about',
        Component:About
      },
      {
        path:'user',
        lazy:async () => {
          const Component = await import('../views/user');
          return {
            Component: Component.default
          }
        }
      }
    ]
  },
  {
    path:'*', //通配符，当路由匹配不到时，显示404页面
    // 路由懒加载
    lazy:async () => {
      const Component = await import('../views/404');
      return {
        Component: Component.default
      }
    }
  }
])


export default router;