// import { useEffect, useRef } from "react";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
import SectionHeading from "../ui/SectionHeading";
import Client from "./Client";

import classes from "./Clients.module.css";

import ww from "../../assets/img/clients/ww-logo.svg";
import vp from "../../assets/img/clients/virtusel-post.svg";

const Clients = () => {
  const sectionRef = useRef(null);
  // const RestPlaceRef = useRef(null);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     mouseLocation(
  //       { default: false },
  //       {
  //         el: sectionRef.current,
  //         bounding: RestPlaceRef.current.getBoundingClientRect(),
  //       },
  //       dispatch
  //     );
  //   });
  // }, [dispatch]);

  return (
    <div ref={sectionRef} className={`${classes.clients}`}>
      <SectionHeading>Client</SectionHeading>
      <div className={classes["clients-container"]}>
        <Client className={classes["client-loc-1"]} img={vp} />
        <Client className={classes["client-loc-2"]} img={ww} />
        <Client className={classes["client-loc-3"]} img={vp} />
        <Client className={classes["client-loc-4"]} img={ww} />
        <Client className={classes["client-loc-5"]} img={vp} />
        <Client className={classes["client-loc-6"]} img={ww} />
        <Client className={classes["client-loc-7"]} img={vp} />
      </div>
    </div>
  );
};

export default Clients;
