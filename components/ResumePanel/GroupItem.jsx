import classes from '../../styles/resume.module.css';

const GroupItem = ({ title, value }) => {
    return (
        <div className={classes.item}>
            <div className={classes.data}>
                <span className={classes.value}>
                    <span className="realdata ql-container ql-disabled">
                        <p>{value}</p>
                        <span className={classes.title}>{title}</span>
                    </span>
                </span>
                <span className="divider"></span>
            </div>
        </div>
    )
}

export default GroupItem
