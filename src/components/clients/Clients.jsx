// import { useEffect, useRef } from "react";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
import SectionHeading from "../ui/SectionHeading";
import Client from "./Client";

import classes from "./Clients.module.css";

import ab from "../../assets/img/clients/AB-logo.svg";
import abBlack from "../../assets/img/clients/AB-logo-black.svg";
import fortune from "../../assets/img/clients/Fortune-Avenue-Logo.svg";
import fortuneBlack from "../../assets/img/clients/Fortune-Avenue-Logo-black.svg";
import yottahawk from "../../assets/img/clients/Yottahawk-Logo.svg";
import yottahawkBlack from "../../assets/img/clients/Yottahawk-Logo-black.svg";

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
          imgColor={ab}
        />
        <Client
          className={`${classes["client-loc-2"]} ${classes["mid"]}`}
          img={fortuneBlack}
          imgColor={fortune}
        />
        <Client
          className={`${classes["client-loc-3"]} ${classes["small"]}`}
          img={yottahawkBlack}
          imgColor={yottahawk}
        />
        <Client
          className={`${classes["client-loc-4"]} ${classes["big"]}`}
          img={abBlack}
          imgColor={ab}
        />
        <Client
          className={`${classes["client-loc-5"]} ${classes["big"]}`}
          img={abBlack}
          imgColor={ab}
        />
        <Client
          className={`${classes["client-loc-6"]} ${classes["small"]}`}
          img={fortuneBlack}
          imgColor={fortune}
        />
        <Client
          className={`${classes["client-loc-7"]} ${classes["big"]}`}
          img={yottahawkBlack}
          imgColor={yottahawk}
        />
      </div>
    </div>
  );
};

export default Clients;
