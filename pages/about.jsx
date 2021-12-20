import Head from 'next/head';
import ResumeHeader from '@/components/ResumeHeader/ResumeHeader';
import ResumePanel from '@/components/ResumePanel/ResumePanel';
import ResumeBlock from '@/components/ResumeBlock/ResumeBlock';
import { FaInfoCircle, FaUniversity, FaRegGem } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import classes from '../styles/resume.module.css'
import Rating from '@/components/Rating/Rating';

const About = ({ pageName }) => {
    return (
        <>
            <Head>
                <title>Контакты Кирилла Павловского</title>
                <meta name="keywords" content="контакты,павловский,кирилл,резюме"/>
                <meta name="description" content="резюме"/>
            </Head>
            <ResumeHeader/>
            <ResumePanel/>
            <div className={classes.contentWrapper}>
                <ResumeBlock 
                    title="Краткая информация"
                    icon={<FaInfoCircle size="24"color="black"/>}
                >
                    <div className={classes.info}>
                        3 года успешной работы над разными продуктами.
                        Такими как:
                        <ul className={classes.list}>
                            <li className={classes.optionStart}>
                                <a href='https://trovemat.com/' target="_blank" style={{ color: '#ca7f4c'}}>Trovemat Terminal </a>
                                <span>&nbsp; - терминал купли продажи криптовалюты</span>
                            </li>
                            <li className={classes.optionStart}>
                                <a href="https://sbi.sberbank.ru:9444/ic/dcb/login.html?demoModeU+0026version=3.0" target="_blank" style={{ color: '#ca7f4c'}}> Сббол </a>
                                <span>&nbsp; - модуль платеженые документы</span>
                            </li>
                            <li className={classes.optionStart}>А также CRM система для премиальных менеджеров в одном из самых крупных банков России и СНГ.</li>
                        </ul>
                    </div>
                </ResumeBlock>
                <hr></hr>
                <ResumeBlock 
                    title="Образование"
                    icon={<FaUniversity size="24"color="black"/>}
                >
                    <p>МАИ (московский авиационный университет) факультет №4 Авиа и ракетостроение.</p>
                </ResumeBlock>
                <hr></hr>
                <ResumeBlock 
                    title="Технические навыки"
                    icon={<FaRegGem size="24"color="black"/>}
                >
                    <ul className={classes.list}>
                        <li className={classes.option}>
                            <span>HTML</span>
                            <Rating number={5}/>
                        </li>
                        <li className={classes.option}>
                            <span>CSS</span>
                            <Rating number={4}/>
                        </li>
                        <li className={classes.option}>
                            <span>JavaScript</span>
                            <Rating number={4}/>
                        </li>
                        <li className={classes.option}>
                            <span>React.js</span>
                            <Rating number={4}/>
                        </li>
                        <li className={classes.option}>
                            <span>TypeScript</span>
                            <Rating number={3}/>
                        </li>
                    </ul>
                </ResumeBlock>
                <hr></hr>
                <ResumeBlock 
                    title="Языки"
                    icon={<AiOutlineGlobal size="24"color="black"/>}
                >
                    <ul className={classes.list}>
                        <li className={classes.option}>
                            <span>Русский</span>
                            <Rating number={5}/>
                        </li>
                        <li className={classes.option}>
                            <span>Английский</span>
                            <Rating number={4}/>
                        </li>
                        <li className={classes.option}>
                            <span>Китайский</span>
                            <Rating number={2}/>
                        </li>
                    </ul>
                </ResumeBlock>
            </div>
        </>
    )
};

export const getStaticProps = async () => {
    return {
        props: {
            pageName: 'ABOUT',
        }
    };
};

export default About
