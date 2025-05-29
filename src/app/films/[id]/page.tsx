import Backdrop from "@/ui/backdrop/Backdrop";
import { notFound } from "next/navigation";

import style from "./page.module.scss";

const Page = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params;
  const { id } = params;

  //   const mediaItem = mediaData.find((mediaItem) => mediaItem.slug === slug);

  //   if (!mediaItem) {
  // notFound();
  //   }

  return (
    <div className={style.media}>
      <Backdrop>1</Backdrop>
    </div>
  );
};

export default Page;
