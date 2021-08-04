import SectionHeading from "../ui/SectionHeading";
import FaqItem from "./FaqItem";

import classes from "./Faq.module.css";

const FAQ_POINTS = [
  {
    id: "faq1",
    qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "faq2",
    qn: "Lorem ipsum dolor sit amet, consectetur",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "faq3",
    qn: "Lorem ipsum dolor sit amet",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "faq4",
    qn: "Lorem ipsum dolor sit amet, consectetur",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "faq5",
    qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
];

const Faq = () => {
  return (
    <div className={classes.faq}>
      <SectionHeading>FAQ</SectionHeading>
      <ul className={classes["faq-container"]}>
        {FAQ_POINTS.map((fp) => (
          <FaqItem key={fp.id} qn={fp.qn} ans={fp.ans} />
        ))}
      </ul>
    </div>
  );
};

export default Faq;
