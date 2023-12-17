"use client";
import { HeadNav } from "@/api/home";
import { Button } from "antd";
import { useRouter } from "next/navigation";

interface Props {
  headNavs: HeadNav[];
}

export default function HeadLinks({ headNavs }: Props) {
  const router = useRouter();
  return (
    <>
      {headNavs.map((item) => {
        return (
          <div key={item.id} className="flex items-center">
            <Button type="link" onClick={() => router.push(item.link)}>
              {item.name}
            </Button>
          </div>
        );
      })}
    </>
  );
}
