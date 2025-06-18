import React, {useState} from 'react';
import {Layout as AntdLayout, theme} from 'antd';
import CustomSider from './Sider';
import CustomHeader from './Header';
import CustomContent from './Content';


const {Sider, Header , Content} = AntdLayout;

const Layout:React.FC = () => {
  const {colorBgContainer} = theme.useToken().token;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout style={{minHeight: '100vh'}}>
      <Sider 
        collapsible={true}
        collapsed={collapsed}
        trigger={null}
      >
        <CustomSider />
      </Sider>
      <AntdLayout>
        <Header
          style={{background:colorBgContainer}}
        >
          <CustomHeader collapsed={collapsed} onCollapsed={setCollapsed}></CustomHeader>
        </Header>
        <Content style={{margin: '24px 16px 0', padding: 24}}>
          <CustomContent />
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout;