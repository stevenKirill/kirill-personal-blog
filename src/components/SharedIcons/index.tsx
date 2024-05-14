'use client';

import React from 'react';
import {
  TwitterShareButton,
  VKShareButton,
  TelegramShareButton,
  TwitterIcon, VKIcon, TelegramIcon,
} from 'react-share';
import styles from '../../styles/post.module.css';
import { IPost } from '@/src/types';

interface ISharedIconsProps {
  post: IPost;
}

const SharedIcons = ({ post }: ISharedIconsProps) => (
  <div className={styles.shareIcons}>
    <div className={styles.shareTitle}>Поделиться: </div>
    <VKShareButton
      url=""
      quote={post.title}
      description={post.slug}
      className="margin-left-5"
    >
      <VKIcon size={32} round />
    </VKShareButton>
    <TelegramShareButton
      url=""
      quote={post.title}
      description={post.slug}
      className="margin-left-5"
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>
    <TwitterShareButton
      url=""
      quote={post.title}
      description={post.slug}
      className="margin-left-5"
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </div>
);

export default SharedIcons;
