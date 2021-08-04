import UpQuote from "../../assets/img/testimonials/testimonial-quote-up.svg";
import DownQuote from "../../assets/img/testimonials/testimonial-quote-down.svg";

import classes from "./TestimonialItem.module.css";

const TestimonialItem = (props) => {
  return (
    <li className={`${classes["testimonial-item"]} titem`}>
      <div className={classes["testimonal-header"]}>
        <img src={props.image} alt="user" />
      </div>
      <div className={classes["testimonal-main"]}>
        <p>
          <span>
            <img src={UpQuote} alt="quote" />
          </span>
          {props.data.text}
        </p>
      </div>
      <div className={classes["testimonal-footer"]}>
        <div className={classes["testimonial-author"]}>
          <h5 className={classes["author-name"]}>- {props.data.author.name}</h5>
          <h6 className={classes["author-info"]}>- {props.data.author.info}</h6>
        </div>
        <div className={classes["testimonial-quote"]}>
          <img src={DownQuote} alt="quote" />
        </div>
      </div>
    </li>
  );
};

export default TestimonialItem;
