export type HeadNav = {
  id: number;
  link: string;
  name: string;
};

export type HomeProducts = HeadNav & { description: string };
