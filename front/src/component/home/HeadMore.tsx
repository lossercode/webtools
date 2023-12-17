"use client";

import { AlignCenterOutlined } from "@ant-design/icons";
import { Popover } from "antd";

export default function HeadMore({
  moreContent,
}: {
  moreContent: JSX.Element;
}) {
  return (
    <Popover content={moreContent} placement="bottom">
      <AlignCenterOutlined style={{fontSize: '24px'}} />
    </Popover>
  );
}
