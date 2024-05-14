import { ReactNode } from 'react';
import classes from '../../styles/resume.module.css';

interface IGroupItemProps {
  value: string;
  children: ReactNode;
}

const GroupItem = ({ value, children }: IGroupItemProps) => (
  <div className={classes.item}>
    <div className={classes.data}>
      {children}
      <span className={classes.value}>
        <span className="realdata ql-container ql-disabled">
          <p>{value}</p>
        </span>
      </span>
    </div>
  </div>
);

export default GroupItem;
