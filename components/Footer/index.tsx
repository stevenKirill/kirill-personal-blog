import Link from "next/link";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.link_wrapper}>
          <Link href="/" className={classes.link}>
            <h2>kirill pavlovskii</h2>
          </Link>
          <div className={classes.year}>© 2022-present.</div>
        </div>
        <div className={classes.right}>
          <div>
            <p className={classes.posts}>Статьи</p>
            <div className={classes.postsLinks}>
              <a>React</a>
              <a>JavaScript</a>
              <a>TypeScript</a>
              <a>TypeScript</a>
              <a>TypeScript</a>
              <a>TypeScript</a>
            </div>
          </div>
          <div>
            <p className={classes.posts}>Ссылки</p>
            <div className={classes.social}>
              <a href="https://t.me/kirillPavlovskii" target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a
                href="https://github.com/stevenKirill"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
