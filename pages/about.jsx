import Head from 'next/head';
import ResumeBlock from '@/components/ResumeBlock/ResumeBlock';
import ResumePanel from '@/components/ResumePanel/ResumePanel';

const About = () => {
    return (
        <>
            <Head>
                <title>Контакты Кирилла Павловского</title>
                <meta name="keywords" content="контакты,павловский,кирилл"/>
                <meta name="description" content=""/>
            </Head>
            <ResumePanel/>
            <div>
                <ResumeBlock/>
            </div>
        </>
    )
};

export default About
