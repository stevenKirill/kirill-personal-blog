import classes from "../../styles/rating.module.css";

function Rating({ number }) {
  return (
    <ul className={classes.rating}>
      {Array.from({ length: 5 }, (_, i) => {
        return <li className={`${i < number ? classes.active : ""}`}></li>;
      })}
    </ul>
  );
}

export default Rating;
