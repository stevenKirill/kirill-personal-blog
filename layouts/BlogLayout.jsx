import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  TelegramShareButton,
} from "react-share";
import styles from "@/styles/post.module.css";
import { FacebookIcon, TwitterIcon, VKIcon, TelegramIcon } from "react-share";
import { getCategoryItem } from "@/utils/utils";

export const BlogLayout = ({
  post: { title, date, category, cover_image, slug },
  children,
}) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/blog">
        <a className={styles.post_back}>
          <button className={styles.back_button} role="button">
            Назад
          </button>
        </a>
      </Link>
      <div className={styles.card}>
        <h1 className={styles.post_title}>{title}</h1>
        <div className={styles.post_date}>Опубликовано: {date}</div>
        <div className={styles.post_category_2}>
          {getCategoryItem(category).text}
        </div>
        <div className={styles.post_image_big}>
          <img src={cover_image} alt={styles.post_title} />
        </div>
        <div className={styles.post_body}>{children}</div>
        <div className={styles.shareIcons}>
          <FacebookShareButton
            url={"https://peing.net/ja/"}
            quote={title}
            description={slug}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <VKShareButton
            url={url}
            quote={title}
            description={slug}
            className="margin-left-5"
          >
            <VKIcon size={32} round />
          </VKShareButton>
          <TelegramShareButton
            url={url}
            quote={title}
            description={slug}
            className="margin-left-5"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={url}
            quote={title}
            description={slug}
            className="margin-left-5"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};
