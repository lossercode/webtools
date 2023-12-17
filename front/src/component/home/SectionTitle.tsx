import Image from "next/image";

interface Props {
    imgUrl: string;
    imgAlt: string;
    title: string;
}

export default function SectionTitle({imgUrl, imgAlt, title}: Props) {
  return (
    <section className="flex h-16 flex-wrap content-center container-padding ">
      
        <Image
          src={imgUrl}
          width={24}
          height={24}
          alt={imgAlt}
        />
        <span className="font-medium tracking-wider">{title}</span>
    </section>
  );
}
