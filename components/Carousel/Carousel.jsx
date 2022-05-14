import React from "react";
import Image from "next/image";
import { Carousel } from "@trendyol-js/react-carousel";
import classes from "@/styles/photo.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const leftArrow = () => {
  return (
    <div className={classes.arrow}>
      <AiOutlineArrowLeft size={30} color="black" className={classes.arrow} />
    </div>
  );
};

const rightArrow = () => {
  return (
    <div className={classes.arrow}>
      <AiOutlineArrowRight size={30} color="black" className={classes.arrow} />
    </div>
  );
};

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        show={3.5}
        slide={3}
        swiping={true}
        leftArrow={leftArrow()}
        rightArrow={rightArrow()}
        responsive={true}
      >
        <Image
          src="/images/other/carousel/1.jpg"
          width={400}
          height={400}
          alt="1"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/2.jpg"
          width={400}
          height={400}
          alt="2"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/3.jpg"
          width={400}
          height={400}
          alt="3"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/4.jpg"
          width={400}
          height={400}
          alt="4"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/5.jpg"
          width={500}
          height={500}
          alt="5"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/6.jpg"
          width={400}
          height={400}
          alt="6"
          className="photo_contain"
        />
        <Image
          src="/images/other/carousel/7.jpg"
          width={400}
          height={400}
          alt="6"
          className="photo_contain"
        />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
