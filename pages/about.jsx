import Head from 'next/head';
import ResumeHeader from '@/components/ResumeHeader/ResumeHeader';
import ResumePanel from '@/components/ResumePanel/ResumePanel';
import ResumeBlock from '@/components/ResumeBlock/ResumeBlock';


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
            <div>
                <ResumeBlock/>
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
