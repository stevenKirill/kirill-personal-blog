import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import Section from '@/components/Section';
import Workplaces from '@/components/Workplaces';
import { projects, workplaces } from './constants';
import meira from '../../../public/images/other/carousel/me-ira.jpg';
import vladik from '../../../public/images/other/carousel/vladivostok.jpg';
import classes from './about.module.css';
import ConnectLinks from '@/consts/connect';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Обо мне',
  description: 'Страница о Кирилле Павловском, его опыте и навыках',
  keywords: 'Заказать разработку сайта, разработка сайта с нуля, разработка сайта, фронтенд разработчик, senior frontend developer, middle frontend developer, middle frontend разработчик, senior frontend разработчик, опыт работы, Кирилл Павловский frontend разработчик, заказать сайт, разработка web приложений',
  openGraph: {
    title: 'Блог разработчика Кирилла Павловского',
    description: 'Блог о фронтенд разработке, и других технологиях',
    type: 'website',
    url: 'https://www.kirill-pavlovskii.ru/about',
    images: [
      {
        url: 'https://www.kirill-pavlovskii.ru/_next/image?url=%2Fimages%2Fother%2Flogo.jpg&w=128&q=75',
        width: 128,
        height: 192,
        alt: 'Логотип сайта',
      },
    ],
  },
};

const About = () => (
  <div className={classes.container}>
    <h1 className={classes.header}>Oбо мне</h1>
    <div className={classes.small}>
      <div
        className={classes.animate}
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Image
          src={meira}
          alt="me and ira"
          width={280}
          height={235}
          className={classes.image}
          priority
        />
      </div>

      <div
        className={classes.animate}
        style={{ '--index': 2 } as React.CSSProperties}
      >
        <Image
          src={vladik}
          alt="vladivostok"
          width={220}
          height={260}
          className={classes.image2}
          priority
        />
      </div>
    </div>
    <Gallery />
    <div
      className={classes.wrap}
      style={{ '--index': 3 } as React.CSSProperties}
    >
      <Section heading="Описание">
        <div className={classes.first}>
          <p className={classes.text}>
            Привет, Я Кирилл, я родился и вырос в России в городе Москва.
            Я занимаюсь программированием уже
            {' '}
            {new Date().getFullYear() - 2019}
            {' '}
            лет. Я специализируюсь во фронтенд разработке, по большей части web приложения
            и все что с ними связано.
          </p>
          <p className={classes.text}>
            Кроме работы и программирования я увлекаюсь футболом, путешествиями, и
            иностранными языками. Свободное время я провожу со своей семьей.
          </p>
        </div>
      </Section>
      <Section heading="Контакты">
        <ul className={classes.contact}>
          {ConnectLinks.map((link) => (
            <li className={classes.item} key={link.label}>
              <Link
                href={link.href}
                className={classes.link}
                target="_blank"
              >
                <div className={classes.linkInner}>
                  <span style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}>
                    {link.icon}
                  </span>
                  {link.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={classes.icon}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section heading="Работа">
        <div className={classes.work}>
          <p className={classes.text}>
            Я специализируюсь на фронтенд разработке, пишу больше всего на JavaScript, TypeScript,
            Node.js, React.js. Люблю изучать новые языки и техгологии, всегда открыт к обучению.
            Считаю что в нашей профессии нужно постоянно учиться и развиваться чтобы не стоять
            на месте и быть востребованным специалистом. Ниже список компаний где я работал
            и работаю сейчас.
          </p>
          <Workplaces items={workplaces} />
        </div>
      </Section>
      <Section heading="Проекты">
        <div className={classes.work}>
          <p className={classes.text}>
            Некоторые проекты, которые я сделал и могу публиковать в свободном доступе.
          </p>
          <Projects items={projects} />
        </div>
      </Section>
    </div>
  </div>
);

export default About;
