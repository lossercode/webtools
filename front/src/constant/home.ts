import { HeadNav, HomeProducts } from "@/api/home";

export const homeNav: HeadNav[] = [
  { id: 1, link: "/docs", name: "文档" },
  { id: 2, link: "/about", name: "关于" },
  { id: 3, link: "/feedbacks", name: "意见反馈" },
];

export const homeProducts: HomeProducts[] = [
  {
    id: 0,
    link: "/lecture",
    name: "AutoLecture",
    description: "根据班级微信群里的学术讲座通知，自动生成讲座考核表",
  },
  {
    id: 1,
    link: "/form",
    name: "CopyForm",
    description: "上传一张图片，自动提取图片里面的表格并生成多种可用格式",
  },
  {
    id: 2,
    link: "/music",
    name: "MusicMaker",
    description: "根据文本描述自动生成一段音乐，支持伴奏提取、人声提取等",
  },
];
