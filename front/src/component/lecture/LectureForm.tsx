"use client";
import { Button, Form, Input, InputNumber, Rate, Space } from "antd";

export default function LectureForm() {
  return (
    <div className="bg-white p-8 rounded-lg sm:w-3/5 sm:mx-auto">
      <Form layout="vertical">
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="学号" name="studentId">
          <Input />
        </Form.Item>
        <Form.Item label="专业">
          <Input />
        </Form.Item>
        <Form.Item label="年级" name="grade">
          <Input />
        </Form.Item>
        <Form.Item label="班级" name="class">
          <Input />
        </Form.Item>
        <Form.Item label="讲座通知" name="content">
          <Input.TextArea
            placeholder="请将班级微信群里面的讲座通知文本完整复制过来"
          />
        </Form.Item>
        <Form.Item label="讲座评分" name="score">
          <Rate count={10} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary">提交</Button>
            <Button>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
