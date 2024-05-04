import React, { FC } from 'react';
import { Post } from "@/components/Post";
import { getArticleWord } from "../../utils/utils";
import classes from './classes.module.css';
import { ICategoryPost } from '@/types';

interface IProps {
  numOfArticles: number;
  text: string;
  category: ICategoryPost;
}

const CardWithTitle: FC<IProps> = ({ numOfArticles, text, category }) => {
  return (
    <>
      <div className={classes.categoryTitle}>
        <h1 className={classes.categoryText}>{text}</h1>
        <span className={classes.categoryTitleText}>
          {numOfArticles}
          &nbsp;
          {getArticleWord(numOfArticles)}
        </span>
      </div>
        <div className={classes.category} key={category.title}>
          {category.posts.map((post) => <Post post={post} key={post.slug} />)}
      </div>
    </>
  );
}

export default CardWithTitle;
