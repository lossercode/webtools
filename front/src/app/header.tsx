"use client";

import HeadLinks from "@/component/home/HeadLinks";
import HeadMore from "@/component/home/HeadMore";
import { homeNav } from "@/constant/home";
import { Image } from 'antd'

export default function HomeHeader() {
  return (
    <header className="container-padding border-b h-16">
      <nav className="w-full h-full flex justify-between">
        <h1 className="w-1/4 h-full">
          <a href="#" className="flex items-center w-full h-full">
            <Image src="logo.svg" alt="webtools" width={42} height={42} preview={false}/>
          </a>
        </h1>

        <div className="hidden sm:flex w-1/4 h-full flex justify-between items-center">
          <HeadLinks headNavs={homeNav} />
        </div>

        <div className="w-1/4 h-full flex items-center justify-center sm:hidden">
          <HeadMore moreContent={<HeadLinks headNavs={homeNav} />} />
        </div>
      </nav>
    </header>
  );
}
