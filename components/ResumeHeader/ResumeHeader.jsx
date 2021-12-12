import Image from "next/image";
import classes from '../../styles/resume.module.css';

const ResumeHeader = () => {
    return (
        <div className={classes.header}>
            <div>
            <Image 
                src="/images/other/resume.jpg"
                width={160}
                height={160}
                alt="logo"
                className={classes.logo}
            />
            </div>
            <div className={classes.text}>
                <h2>Кирилл Павловский</h2>
                <h4>Frontend developer</h4>
            </div>
        </div>
    )
}

export default ResumeHeader
