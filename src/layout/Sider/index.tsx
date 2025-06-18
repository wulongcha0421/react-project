import React from 'react';
import { useNavigate } from 'react-router'
import {Menu} from 'antd';
import type {MenuProps} from 'antd';
import {HomeOutlined, UserOutlined,SmileOutlined } from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/home',
    label: '首页',
    icon:<HomeOutlined />,
  },
  {
    key: '/user',
    label: '用户信息',
    icon:<UserOutlined />
  },
  {
    key: '/about',
    label: '关于',
    icon:<SmileOutlined />
  },
]

const CustomSider:React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick:MenuProps['onClick'] = (info) => {
    console.log('Menu item clicked:', info.key);
    navigate(info.key);
  }

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['/home']}
      style={{height: '100%', borderRight: 0}}
      onClick={handleMenuClick}
      items={items}
      theme="dark"
    ></Menu>
  )
}

export default CustomSider;