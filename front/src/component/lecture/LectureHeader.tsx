"use client";
import { Button, Col, Image, Row } from "antd";

export default function LectureHeader() {
  return (
    <>
      <div className="w-1/4 flex items-center ">
        <Image src="/logo.svg" width={42} height={42} alt="" />
      </div>
      <div className="w-1/4 flex items-center justify-end">
        <Button type="primary">登录/注册</Button>
      </div>
    </>
  );
}
