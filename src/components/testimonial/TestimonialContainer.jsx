import { useEffect, useRef, useState } from "react";
import TestimonialItem from "./TestimonialItem";

import TestimonialData from "./testimonialData.json";

import classes from "./TestimonialContainer.module.scss";

import UserImg from "../../assets/img/testimonials/user-image.svg";

const TestimonialContainer = () => {
  const testimonialContainerRef = useRef(null);
  const testimonialContainerInnerRef = useRef(null);
  const [testimonialContainer, setTestimonialContainer] = useState();
  useEffect(() => {
    setTestimonialContainer(testimonialContainerRef.current);
  }, [testimonialContainer]);
  let isDown = false;
  let startX, scrollLeft;
  const mouseDownHandler = (event) => {
    isDown = true;
    testimonialContainer.classList.add(`${classes.active}`);
    startX = event.pageX - testimonialContainer.offsetLeft;
    scrollLeft = testimonialContainer.scrollLeft;
  };
  const mouseLeaveHandler = (event) => {
    isDown = false;
    testimonialContainer.classList.remove(`${classes.active}`);
  };
  const mouseUpHandler = (event) => {
    isDown = false;
    testimonialContainer.classList.remove(`${classes.active}`);
  };
  const mouseMoveHandler = (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - testimonialContainer.offsetLeft;
    const scroll = x - startX;
    testimonialContainer.scrollLeft = scrollLeft - scroll;
  };
  const mouseOverInnerHanlder = (event) => {
    testimonialContainerInnerRef.current.style.animationPlayState = "paused";
  };
  const mouseOutInnerHandler = (event) => {
    testimonialContainerInnerRef.current.style.animationPlayState = "running";
  };
  return (
    <ul
      ref={testimonialContainerRef}
      className={classes["testimonial-container"]}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
    >
      <div
        ref={testimonialContainerInnerRef}
        className={classes["testimonial-container-inner"]}
        onMouseOver={mouseOverInnerHanlder}
        onMouseOut={mouseOutInnerHandler}
      >
        {TestimonialData.map((td) => (
          <TestimonialItem key={td.id} data={td} image={UserImg} />
        ))}
        {TestimonialData.map((td) => (
          <TestimonialItem key={td.id} data={td} image={UserImg} />
        ))}
      </div>
    </ul>
  );
};

export default TestimonialContainer;
