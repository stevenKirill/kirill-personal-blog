import classes from "./footer.module.css";
import { FaGithub, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.name}>© kirill pavlovskii</div>
      <div className={classes.icons}>
        <a href="https://t.me/kirillPavlovskii" target="_blank" rel="noreferrer">
          <FaTelegram color="white" size="30" className={classes.icon} />
        </a>
        <a
          href="https://github.com/stevenKirill"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub color="white" size="30" className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
