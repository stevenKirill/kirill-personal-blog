import { ReactNode } from "react";
import classes from "../../styles/resume.module.css";

interface IResumeBlock {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const ResumeBlock = ({ children, title, icon }: IResumeBlock) => {
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
