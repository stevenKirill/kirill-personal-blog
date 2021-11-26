import classes from '../../styles/footer.module.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    // TODO добавить ссылки на github и на telegram
    return (
        <div className={classes.wrapper}>
            <div className={classes.name}>© kirill pavlovskii</div>
            <div className={classes.icons}>
                <a href="/">
                    <FaTelegram color="white" size="30" className={classes.icon}/>
                </a>
                <a href="/">
                    <FaGithub color="white" size="30" className={classes.icon}/>
                </a>
            </div>
        </div>
    )
};

export default Footer
