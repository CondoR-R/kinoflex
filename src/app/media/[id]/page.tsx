import { notFound } from "next/navigation";

import Backdrop from "@/ui/media/backdrop/Backdrop";
import Description from "@/ui/media/description/Description";
import About from "@/ui/media/about/About";

import style from "./page.module.scss";

const Page = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params;
  const { id } = params;

  //   const mediaItem = mediaData.find((mediaItem) => mediaItem.slug === slug);

  //   if (!mediaItem) {
  // notFound();
  //   }

  return (
    <main className={style.media}>
      <Backdrop />
      <Description />
      <About />
    </main>
  );
};

export default Page;
