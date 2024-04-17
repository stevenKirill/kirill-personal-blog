"use client";

import { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel";
import classes from "../../styles/photo.module.css";

const Photo = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className={classes.wrapper}>{mounted && <CarouselComponent />}</div>
  );
};

export default Photo;
