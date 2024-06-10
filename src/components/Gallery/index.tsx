/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */

'use client';

import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

import huangdao from '../../../public/images/other/carousel/huangdao.jpg';
import tokyo from '../../../public/images/other/carousel/tokyo.jpg';
import meira from '../../../public/images/other/carousel/me-ira.jpg';
import vladik from '../../../public/images/other/carousel/vladivostok.jpg';

import classes from './classes.module.css';

import { cx } from '@/utils/utils';
import Halo from '../Halo';

const tildaSansRegular = localFont({
  src: '../../../public/tildaSansRegular.woff2',
  display: 'swap',
});

interface PhotoProps {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: 'left' | 'right';
  children?: ReactNode;
}

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName = filename
    || (typeof src !== 'string'
      && `${src.src.split('/').at(-1)?.split('.')[0]}.jpg`);
  return (
    <motion.div
      className={classes.first}
      style={{
        rotate: `${rotate}deg`, left, width, height, perspective: 1000,
      }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: 'spring',
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{
        width, height, rotate, y: 0, opacity: 1, x: 0,
      }}
      drag
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileHover="flipped"
    >
      <motion.div
        className={classes.inner}
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === 'right' ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={classes.shared} style={{ backfaceVisibility: 'hidden' }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classes.image}
            priority
          />
          {children}
        </div>
        <div
          className={cx(
            classes.shared,
            classes.block,
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Halo strength={50} className={classes.halo}>
            <span className={classes.back} />
            <div className={classes.pixel}>
              <div
                className={cx(
                  tildaSansRegular.className,
                  classes.textWrapper,
                )}
              >
                <p className="text-secondary">{fileName}</p>
                {meta && <p className={classes.text}>{meta}</p>}
              </div>
            </div>
          </Halo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className={classes.gallery_container}>
      <Photo
        src={huangdao}
        meta="2019-31-10"
        alt="huangdao"
        width={324}
        height={239}
        rotate={-6}
        left={-76}
        index={1}
      />
      <Photo
        src={tokyo}
        meta="2019-28-09"
        alt="tokyo"
        width={230}
        height={250}
        rotate={6.3}
        left={160}
        index={2}
        flipDirection="left"
      />
      <Photo
        src={meira}
        meta="2023-01-12"
        alt="meira"
        width={280}
        height={235}
        rotate={-5.4}
        left={300}
        index={3}
      />
      <Photo
        src={vladik}
        meta="2022-04-14"
        alt="Vladivostok"
        width={220}
        height={260}
        rotate={7.6}
        left={530}
        index={4}
        flipDirection="left"
      />
    </section>
  );
}
