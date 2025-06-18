import React from "react"
import { useNavigate } from "react-router";
import type { FormProps } from "antd";
import {Form, Button, Input, message} from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useUserStore from '../../store/user.ts'
import { useShallow } from "zustand/shallow";
import './index.css';


type FieldType = {
  username?: string;
  password?: string;
}

const Login:React.FC = () =>{
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { setUser, setToken } = useUserStore(useShallow((state) => ({
    setUser: state.setUser,
    setToken: state.setToken
  })));

  // 提交表单且数据验证成功时的回调函数
  const onFinish:FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    if(values.username === 'admin' && values.password === '12345') {
      // 模拟登录成功，跳转到首页
      setUser({ name: values.username, isAccess: true });
      setToken(values.username + '-token'); // 模拟设置token
      messageApi.open({
        type: 'success',
        content: '登录成功',
      });
      navigate('/home');
    }else{
      messageApi.open({
        type: 'error',
        content: '登录失败，请检查用户名和密码',
      });
    }
  }

  // 提交表单且数据验证失败时的回调函数
  const onFinishFailed:FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    messageApi.open({
      type: 'warning',
      content: '登录失败，请检查输入',
    });
  }

  return (
    <div className="login-container">
      {contextHolder}
      <div className="login-content">
        <div className="login-content__title">登 录</div>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateTrigger="onBlur"
          clearOnDestroy={true}
        >
          <Form.Item<FieldType>
            name="username"  
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined/>} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password prefix={<LockOutlined/>} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            label=""
          >
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login;