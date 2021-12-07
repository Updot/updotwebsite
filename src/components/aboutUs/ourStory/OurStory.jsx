import SectionHeading from "../../ui/SectionHeading";
import classes from "./OurStory.module.scss";

const OurStory = () => {
  return (
    <div className={`${classes["stroy-container"]} container`}>
      <SectionHeading>Our Origin Story</SectionHeading>
      <p className={classes["story-para"]}>
        Where to begin? Updot isn’t just a brand or a firm, it’s a result that
        derived from the combined efforts of two entrepreneurs.
      </p>
      <p className={classes["story-para"]}>
        Updot is a Bangalore-based digital solutions agency striving to the best
        of its abilities to provide a top-notch digital experience to its
        clients.
      </p>
      <p className={classes["story-para"]}>
        Unlike most startups, Updot had very humble beginnings. It was during
        the 2020 COVID lockdown that the agency was born. Both{" "}
        <a href="mailto:athul@updot.in">Athul Madhusoodanan</a> and{" "}
        <a href="mailto:hrithik@updot.in">Hrithik Unnikrishnan</a> were running
        two different firms back then. It wasn’t until September 2020 that two
        old friends decided to finally join hands and hence, the new age digital
        agency came into being.
      </p>
      <p className={classes["story-para"]}>
        From then, it has been a rollercoaster of a ride for the entire team. As
        they very often say, the story has just begun.
      </p>
    </div>
  );
};

export default OurStory;
