import classes from "../../styles/resume.module.css";

const ResumeBlock = ({ children, title, icon }) => {
  return (
    <div className={classes.blockWrapper}>
      <div className={classes.blockHeader}>
        {icon}
        <div className={classes.blockHeaderRight}>{title}</div>
      </div>
      <div className={classes.blockBody}>{children}</div>
    </div>
  );
};

export default ResumeBlock;
