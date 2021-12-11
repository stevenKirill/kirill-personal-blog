import classes from '../../styles/resume.module.css';
import GroupItem from './GroupItem';

const ResumePanel = () => {
    return (
        <div className={classes.content}>
            <div className={classes.replacer}></div>
            <div className={classes.contacts}>
                <div className={classes.list}>
                    <div className={classes.replacer}></div>
                        <GroupItem value="kirill-pavlovskij@rambler.ru"/>
                        <GroupItem value="+7-999-803-38-56"/>
                        <GroupItem value="Москва"/>
                        <GroupItem value="Кирилл Павловский"/>
                    <div className={classes.replacer}></div>
                </div>
            </div>
            <div className={classes.replacer}></div>
        </div>
    )
}

export default ResumePanel
