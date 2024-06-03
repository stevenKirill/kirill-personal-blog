import Gallery from '@/components/Gallery';
import classes from './about.module.css';

const About = () => (
  <div className={classes.container}>
    <h1 className={classes.header}>Oбо мне</h1>
    <Gallery />
  </div>
);

export default About;
