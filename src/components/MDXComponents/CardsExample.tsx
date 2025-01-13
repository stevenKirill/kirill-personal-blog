'use client';

import React, { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/other/user.png';
import classes from './cards.module.css';

const data = [
  {
    name: 'Kirill',
    nickName: '@kirillPavlovskii',
    job: 'Frontend dev',
    city: 'Moscow',
    birthDate: '15-05-1995',
    id: '123',
  },
  {
    name: 'Jane',
    nickName: '@jane',
    job: 'Backend dev',
    city: 'New York',
    birthDate: '13-04-1999',
    id: '865',
  },
  {
    name: 'Tina',
    nickName: '@tina',
    job: 'Data science',
    city: 'Tokyo',
    birthDate: '20-10-1992',
    id: '048',
  },
  {
    name: 'Brett',
    nickName: '@brett',
    job: 'CEO',
    city: 'Toronro',
    birthDate: '03-09-1988',
    id: '219',
  },
  {
    name: 'Tom',
    nickName: '@tom',
    job: 'TeamLead',
    city: 'London',
    birthDate: '10-07-1994',
    id: '427',
  },
  {
    name: 'James',
    nickName: '@james',
    job: 'QA',
    city: 'Chicago',
    birthDate: '12-02-1985',
    id: '639',
  },
];

const CardsExample = () => {
  const [value, setValue] = useState(4);
  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(Number(target.value));
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.sliderContainer}>
        <div className={classes.sliderValue}>
          <div>Количество карточек</div>
          <div>{value}</div>
        </div>
        <input
          className={classes.sliderInput}
          type="range"
          min={1}
          max={6}
          step={1}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className={classes.cards}>
        {data.slice(0, value).map((card) => (
          <div className={classes.outer}>
            <div className={classes.card}>
              <div className={classes.avatar}>
                <Image src={logo} alt="user" />
              </div>
              <div className={classes.name}>
                <span>{card.name}</span>
                <span>{card.nickName}</span>
              </div>
              <div className={classes.contact}>
                <div>{card.city}</div>
                <div>{card.job}</div>
                <div>{card.birthDate}</div>
                <div>{card.id}</div>
              </div>
              <div className={classes.buttons}>
                <button className={classes.contactBtn} type="button">Contact</button>
                <button className={classes.followBtn} type="button">Follow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsExample;
