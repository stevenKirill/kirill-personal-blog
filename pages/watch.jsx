import Head from "next/head";
import { VideoBlock } from "@/components/VideoBlock/VideoBlock";

const Other = () => {
  return (
    <>
      <Head>
        <title>Видео</title>
        <meta
          name="keywords"
          content="блог,павловский,кирилл,видео,саморазвитие"
        />
        <meta
          name="description"
          content="блог и видео которые советую посмотреть"
        />
      </Head>
      <VideoBlock />
    </>
  );
};

export default Other;
