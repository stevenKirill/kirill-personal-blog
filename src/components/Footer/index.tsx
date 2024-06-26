import Link from 'next/link';
import classes from './footer.module.css';

const links = [
  {
    title: 'JavaScript',
    path: 'javascript',
  },
  {
    title: 'TypeScript',
    path: 'typescript',
  },
  {
    title: 'React',
    path: 'react',
  },
  {
    title: 'CSS',
    path: 'css',
  },
  {
    title: 'Карьера',
    path: 'career',
  },
  {
    title: 'Java',
    path: 'java',
  },
];

const Footer = () => (
  <div className={classes.wrapper}>
    <div className={classes.inner}>
      <div className={classes.link_wrapper}>
        <Link href="/" className={classes.link}>
          <h2>kirill pavlovskii</h2>
        </Link>
        <div className={classes.year}>© 2022 - настоящее время.</div>
      </div>
      <div className={classes.right}>
        <div>
          <p className={classes.posts}>Статьи</p>
          <div className={classes.postsLinks}>
            {links.map((link) => (
              <Link href={`/category/${link.path}`} key={link.path}>{link.title}</Link>
            ))}
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
      <div className={classes.year_responsive}>© 2022 - настоящее время.</div>
    </div>
  </div>
);

export default Footer;
