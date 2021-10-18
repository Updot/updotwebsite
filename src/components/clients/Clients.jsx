// import { useEffect, useRef } from "react";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
import SectionHeading from "../ui/SectionHeading";
import Client from "./Client";

import classes from "./Clients.module.css";

import ww from "../../assets/img/clients/ww-logo.svg";
import vp from "../../assets/img/clients/virtusel-post.svg";
import abBlack from "../../assets/img/clients/ABGROUP logo - black.png";
import abColor from "../../assets/img/clients/ABGROUP logo - with bg.jpg";
import createXBlack from "../../assets/img/clients/CreateX logo - black.png";
import createXColor from "../../assets/img/clients/CreateX logo.png";
import fGrillBlack from "../../assets/img/clients/f grill logo - black.png";
import fGrillColor from "../../assets/img/clients/f grill logo.png";
import FABlack from "../../assets/img/clients/Fortune Avenue logo - black.png";
import FAColor from "../../assets/img/clients/Fortune Avenue logo.png";
import ggBlack from "../../assets/img/clients/Georges Ganden logo - black.png";
import ggColor from "../../assets/img/clients/Georges Ganden logo.png";

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
      <SectionHeading>Clients</SectionHeading>
      <div className={classes["clients-container"]}>
        <Client
          className={`${classes["client-loc-1"]} ${classes["big"]}`}
          img={abBlack}
          imgColor={abColor}
        />
        <Client
          className={`${classes["client-loc-2"]} ${classes["mid"]}`}
          img={createXBlack}
          imgColor={createXColor}
        />
        <Client
          className={`${classes["client-loc-3"]} ${classes["small"]}`}
          img={fGrillBlack}
          imgColor={fGrillColor}
        />
        <Client
          className={`${classes["client-loc-4"]} ${classes["big"]}`}
          img={FABlack}
          imgColor={FAColor}
        />
        <Client
          className={`${classes["client-loc-5"]} ${classes["big"]}`}
          img={ggBlack}
          imgColor={ggColor}
        />
        <Client
          className={`${classes["client-loc-6"]} ${classes["small"]}`}
          img={ww}
          imgColor={ww}
        />
        <Client
          className={`${classes["client-loc-7"]} ${classes["big"]}`}
          img={vp}
          imgColor={vp}
        />
      </div>
    </div>
  );
};

export default Clients;
