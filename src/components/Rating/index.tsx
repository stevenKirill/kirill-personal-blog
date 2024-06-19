import classes from '../../styles/rating.module.css';

interface IProps {
  number: number;
}

const Rating = ({ number }: IProps) => (
  <ul className={classes.rating}>
    {Array.from({ length: 5 }, (_, i) => <li className={`${i < number ? classes.active : ''}`} />)}
  </ul>
);

export default Rating;
