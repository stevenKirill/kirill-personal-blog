import classes from "../../styles/resume.module.css";

const GroupItem = ({ value, children }) => {
  return (
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
};

export default GroupItem;
