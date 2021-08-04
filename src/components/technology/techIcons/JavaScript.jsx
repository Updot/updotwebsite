import { useState } from "react";
import classes from "./TechIcon.module.css";

const JavaScript = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseOverHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };
  let fill1 = isHover ? "#F0DB4F" : "#000";
  let fill2 = isHover ? "#323330" : "#fff";
  return (
    <div
      className={`${classes.icon} ${classes["js-icon"]}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="102"
        viewBox="0 0 102 102"
      >
        <g
          id="Group_23"
          data-name="Group 23"
          transform="translate(9524.447 22.593)"
        >
          <rect
            id="Rectangle_15"
            data-name="Rectangle 15"
            width="102"
            height="102"
            transform="translate(-9524.447 -22.592)"
            fill={fill1}
          />
          <path
            id="Path_500"
            data-name="Path 500"
            d="M207.217,319.031c2.039,3.329,4.691,5.775,9.382,5.775,3.941,0,6.458-1.969,6.458-4.691,0-3.261-2.586-4.416-6.924-6.313l-2.378-1.02c-6.863-2.924-11.422-6.586-11.422-14.33,0-7.133,5.435-12.563,13.928-12.563,6.047,0,10.394,2.1,13.526,7.615l-7.406,4.755c-1.631-2.924-3.39-4.076-6.121-4.076-2.786,0-4.551,1.767-4.551,4.076,0,2.853,1.767,4.008,5.848,5.775l2.378,1.019c8.081,3.465,12.643,7,12.643,14.94,0,8.562-6.726,13.253-15.759,13.253-8.832,0-14.538-4.209-17.331-9.726Zm-33.6.824c1.494,2.651,2.853,4.892,6.121,4.892,3.125,0,5.1-1.222,5.1-5.976V286.433h9.51V318.9c0,9.848-5.774,14.33-14.2,14.33-7.615,0-12.024-3.941-14.267-8.687Z"
            transform="translate(-9663.271 -262.17)"
            fill={fill2}
          />
        </g>
      </svg>
    </div>
  );
};

export default JavaScript;
