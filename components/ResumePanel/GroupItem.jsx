import classes from '../../styles/resume.module.css';

const GroupItem = ({ value }) => {
    return (
        <div className={classes.item}>
            <div className={classes.data}>
                <span className={classes.value}>
                    <span className="realdata ql-container ql-disabled">
                        <p>{value}</p>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default GroupItem
