import Head from "next/head";
import { useEffect, useState } from "react";
import CarouselComponent from "@/components/Carousel/Carousel";
import classes from "@/styles/photo.module.css";

const Photo = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Head>
        <title>фото</title>
        <meta
          name="keywords"
          content="блог,павловский,кирилл,видео,саморазвитие"
        />
        <meta
          name="description"
          content="блог и видео которые советую посмотреть"
        />
      </Head>
      <div className={classes.wrapper}>{mounted && <CarouselComponent />}</div>
    </>
  );
};

export default Photo;
