import classes from "../../styles/resume.module.css";
import GroupItem from "./GroupItem";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const ResumePanel = () => {
  return (
    <div className={classes.content}>
      {/* <div className={classes.replacer}></div> */}
      <div className={classes.contacts}>
        <div className={classes.list}>
          <div className={classes.replacer}></div>
          <div className={classes.group}>
            <GroupItem value="kirill-pavlovskij@rambler.ru">
              <MdEmail size={24} />
            </GroupItem>
            <GroupItem value="+7-999-803-38-56">
              <AiFillPhone size={24} />
            </GroupItem>
            <GroupItem value="Москва">
              <ImLocation size={24} />
            </GroupItem>
            <GroupItem value="Кирилл Павловский">
              <FaUserCircle size={24} />
            </GroupItem>
          </div>
          <div className={classes.replacer}></div>
        </div>
      </div>
      {/* <div className={classes.replacer}></div> */}
    </div>
  );
};

export default ResumePanel;
