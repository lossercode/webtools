import { homeProducts } from "@/constant/home";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/component/home/SectionTitle";
import HomeHeader from "@/component/home/HomeHeader";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1">
        {/* 标题 */}
        <section className="w-full h-64 flex items-center bg-[url('/bg-home@95.jpg')] bg-cover">
          <div className="w-full h-3/5">
            <h1 className="w-full text-4xl py-8 tracking-wider text-center">
              IKUN AI
            </h1>
            <h3 className="w-full text-center font-light">
              AI 小工具集合，助你更好的唱、跳、rap、🏀
            </h3>
          </div>
        </section>

        {/* 产品列表 */}
        <SectionTitle
          imgUrl="/bigmodel-tab-selected.svg"
          imgAlt="产品列表"
          title="产品列表"
        />
        <section className="container-padding flex justify-between flex-wrap text-white">
          {homeProducts.map((product) => {
            const bg = [
              "from-fuchsia-600 to-purple-600",
              "from-violet-500 to-purple-500",
              "from-fuchsia-600 to-pink-600",
            ];
            return (
              <div
                className={`w-full md:w-[30%] h-38 md:h-44 lg:h-46 p-4 sm:p-6 mb-6 rounded-md md:rounded-xl bg-gradient-to-b ${
                  bg[product.id]
                } transition ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110 duration-200 flex flex-wrap content-between`}
                key={product.id}
              >
                <div className="w-full text-xl">{product.name}</div>
                <div className="w-full my-2 text-sm">{product.description}</div>
                <div className="w-full flex justify-end">
                  <Link href={product.link} className="flex content-center">
                    <span className="flex flex-wrap content-center text-sm">
                      了解更多
                    </span>
                    <Image
                      src="/right-small.svg"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* 页脚 */}
      <footer className="h-20 w-full bg-slate-100 ">
        <div className="w-full h-10 flex flex-wrap content-end justify-center text-sm">
          All Rights Copied By 成都鸡哥科技有限公司
        </div>
        <div className="w-full h-10 flex flex-wrap content-center justify-center text-xs">💪</div>
      </footer>
    </>
  );
}
