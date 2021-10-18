import { useState } from "react";
import classes from "./Client.module.css";
const Client = (props) => {
  const [isHover, setIsHover] = useState(false);

  // const svgRef = useRef(null);
  // const circleRef = useRef(null);
  // useEffect(() => {
  //   const dot = document.querySelector("[data-arrow='mousearrow']");
  //   window.addEventListener("mousemove", (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     dot.style.left = `${x}px`;
  //     dot.style.top = `${y}px`;
  //     const centerX = dot.offsetLeft + dot.clientWidth / 2;
  //     const centerY = dot.offsetTop + dot.clientHeight / 2;
  //     const bouding = circleRef.current.getBoundingClientRect();
  //     const elCenterX = bouding.x + bouding.width / 2;
  //     const elCenterY = bouding.y + bouding.height / 2;
  //     console.log(elCenterX, elCenterY);
  //     connector.setAttribute(
  //       "d",
  //       metaball(50, 10, [elCenterX, elCenterY], [centerX, centerY])
  //     );
  //   });
  // }, []);
  return (
    <div
      className={`${classes.client} ${props.className}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {/* <svg
        class="svg"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke-width="2" fill="#fff" stroke="#fff">
          <circle
            ref={circleRef}
            id="js-circle1"
            cx="300"
            cy="300"
            r="50"
            fill="#fff"
          />
          <path transform="translate(-60,-60)" id="js-connector" d="" />
        </g>
      </svg> */}
      {!isHover && <img src={props.img} alt="client" />}
      {isHover && <img src={props.imgColor} alt="client" />}
    </div>
  );
};

export default Client;
