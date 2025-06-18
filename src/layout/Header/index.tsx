import React from 'react';
import {  Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface CustomHeaderProps {
  collapsed: boolean;
  onCollapsed: (collapsed: boolean) => void;
}

const customHeader:React.FC<CustomHeaderProps> = (props) => {
  const { collapsed, onCollapsed } = props;
  return (
    <>
      <Button 
        type="text"
        onClick={() => onCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      ></Button>
    </>
  )
}

export default customHeader;