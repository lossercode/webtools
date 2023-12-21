"use client";
import { Col, Form, Input, Row } from "antd";
import './page.css'

export default function LectureDetail() {
  return (
    <Form>
        {/* <Row>工商管理学院研究生学术考核表</Row> */}
        <span className="name">this is a fox</span>
        <Row>
            <Col>
                <Form.Item label="姓名">
                    <Input value={'ttt'}/>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item label="专业">
                    <Input value={'ttt'}/>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Item label="姓名">
                    <Input value={'ttt'}/>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item label="专业">
                    <Input value={'ttt'}/>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Item label="姓名">
                    <Input value={'ttt'}/>
                </Form.Item>
            </Col>
            <Col>
                <Form.Item label="专业">
                    <Input />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Item label="姓名">
                    <Input />
                </Form.Item>
            </Col>
            <Col>
                <Form.Item label="专业">
                    <Input  bordered={false}/>
                </Form.Item>
            </Col>
        </Row>
    </Form>
  );
}
