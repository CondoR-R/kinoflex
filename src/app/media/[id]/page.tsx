import { notFound } from "next/navigation";

import Backdrop from "@/ui/media/backdrop/Backdrop";

import style from "./page.module.scss";
import Description from "@/ui/media/description/Description";
import About from "@/ui/media/about/About";

const Page = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params;
  const { id } = params;

  //   const mediaItem = mediaData.find((mediaItem) => mediaItem.slug === slug);

  //   if (!mediaItem) {
  // notFound();
  //   }

  return (
    <div className={style.media}>
      <Backdrop />
      <Description />
      <About />
    </div>
  );
};

export default Page;
