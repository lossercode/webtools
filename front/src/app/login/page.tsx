"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Image, Row, Col } from "antd";

export default function Login() {
  return (
    <div className="container-padding h-screen flex-center bg-[#f7f7f7]">
      <div className="w-4/5 sm:w-2/5 px-10 sm:px-14 py-6 rounded-lg bg-white sm:w-4/5 lg:w-2/5">
        <div className="w-full flex-center mb-4">
          <Image alt="logo" src="/logo.svg" width={42} height={42} />
          <span>IKUN AI</span>
        </div>
        <Form name="login">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入学号" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="学号" />
          </Form.Item>
          
          <Row>
            <Col span={16}>
              <Form.Item
                name="verifycode"
                rules={[{ required: true, message: "请输入验证码" }]}
              >
                <Input prefix={<LockOutlined />} placeholder="验证码" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Row justify="end" className="w-full">
                <Image alt="验证码" src="/logo.svg" height={30} width={'100%'}/>
              </Row>
            </Col>
          </Row>

          <Form.Item>
            <Form.Item name="protocal" noStyle>
              <Checkbox>我已阅读并同意</Checkbox>
            </Form.Item>

            <Button type="link">
              《用户协议》
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              立即登录
            </Button>
          </Form.Item>

          <div className="w-full text-center text-xs text-slate-500">未注册账号登录即为注册</div>
        </Form>
      </div>
    </div>
  );
}
