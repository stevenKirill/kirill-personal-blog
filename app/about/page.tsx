import ResumeHeader from "../../components/ResumeHeader";
import ResumePanel from "../../components/ResumePanel";
import ResumeBlock from "../../components/ResumeBlock";
import Rating from "../../components/Rating";
import { FaInfoCircle, FaUniversity, FaRegGem } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import classes from "../../styles/resume.module.css";

const About = () => {
  return (
    <>
      <ResumeHeader />
      <ResumePanel />
      <div className={classes.contentWrapper}>
        <ResumeBlock
          title="Краткая информация"
          icon={<FaInfoCircle size="24" color="black" />}
        >
          <div className={classes.info}>
            3 года успешной работы над разными продуктами в сфере финтеха.
            Такими как:
            <ul className={classes.list}>
              <li className={classes.optionStart}>
                <a
                  href="https://trovemat.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#ca7f4c" }}
                >
                  Trovemat Terminal{" "}
                </a>
                <span>&nbsp;- терминал купли продажи криптовалюты</span>
              </li>
              <li className={classes.optionStart}>
                <a
                  href="https://sbi.sberbank.ru:9444/ic/dcb/login.html?demoModeU+0026version=3.0"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#ca7f4c" }}
                >
                  {" "}
                  Сббол{" "}
                </a>
                <span>&nbsp;- модуль платёжные документы</span>
              </li>
              <li style={{ textAlign: "left" }} className={classes.optionStart}>
                А также CRM система для премиальных менеджеров и региональных
                руководителей в одном из самых крупных банков России и СНГ
                (более 1000 сотрудников пользуются данной системой).
              </li>
            </ul>
          </div>
        </ResumeBlock>
        <hr></hr>
        <ResumeBlock
          title="Образование"
          icon={<FaUniversity size="24" color="black" />}
        >
          <p>
            МАИ (московский авиационный университет) факультет №4 Авиа и
            ракетостроение.
          </p>
        </ResumeBlock>
        <hr></hr>
        <ResumeBlock
          title="Технические навыки"
          icon={<FaRegGem size="24" color="black" />}
        >
          <ul className={classes.list}>
            <li className={classes.option}>
              <span>HTML</span>
              <Rating number={5} />
            </li>
            <li className={classes.option}>
              <span>CSS</span>
              <Rating number={4} />
            </li>
            <li className={classes.option}>
              <span>JavaScript</span>
              <Rating number={4} />
            </li>
            <li className={classes.option}>
              <span>React.js</span>
              <Rating number={5} />
            </li>
            <li className={classes.option}>
              <span>TypeScript</span>
              <Rating number={3} />
            </li>
          </ul>
        </ResumeBlock>
        <hr></hr>
        <ResumeBlock
          title="Языки"
          icon={<AiOutlineGlobal size="24" color="black" />}
        >
          <ul className={classes.list}>
            <li className={classes.option}>
              <span>Русский</span>
              <Rating number={5} />
            </li>
            <li className={classes.option}>
              <span>Английский</span>
              <Rating number={4} />
            </li>
            <li className={classes.option}>
              <span>Китайский</span>
              <Rating number={2} />
            </li>
          </ul>
        </ResumeBlock>
      </div>
    </>
  );
};

export default About;