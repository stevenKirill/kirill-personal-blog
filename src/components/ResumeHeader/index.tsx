import Image from 'next/image';
import classes from '../../styles/resume.module.css';

const ResumeHeader = () => (
  <div className={classes.header}>
    <div>
      <Image
        src="/images/other/resume.jpg"
        width={200}
        height={200}
        alt="logo"
        className={classes.logo}
      />
    </div>
    <div className={classes.text}>
      <h2>Кирилл Павловский</h2>
      <h4>Frontend developer</h4>
    </div>
  </div>
);

export default ResumeHeader;
