import classes from '../../styles/resume.module.css';
import GroupItem from './GroupItem';

const ResumePanel = () => {
    return (
        <div className={classes.content}>
            <div className={classes.replacer}></div>
            <div className={classes.contacts}>
                <div className={classes.list}>
                    <div className={classes.replacer}></div>
                        <GroupItem value="kirill-pavlovskij@rambler.ru" title="email"/>
                        <GroupItem value="+7-999-803-38-56" title="тел."/>
                        <GroupItem value="Москва" title="город"/>
                        <GroupItem value="Кирилл Павловский" title="имя"/>
                    <div className={classes.replacer}></div>
                </div>
            </div>
            <div className={classes.replacer}></div>
        </div>
    )
}

export default ResumePanel
