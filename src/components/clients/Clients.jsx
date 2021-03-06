// import { useEffect, useRef } from "react";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import mouseLocation from "../../util/mouseLocation";
import SectionHeading from "../ui/SectionHeading";
import Client from "./Client";

import classes from "./Clients.module.scss";

// import ab from "../../assets/img/clients/AB-logo.svg";
// import abBlack from "../../assets/img/clients/AB-logo-black.svg";
// import fortune from "../../assets/img/clients/Fortune-Avenue-Logo.svg";
// import fortuneBlack from "../../assets/img/clients/Fortune-Avenue-Logo-black.svg";
// import yottahawk from "../../assets/img/clients/Yottahawk-Logo.svg";
// import yottahawkBlack from "../../assets/img/clients/Yottahawk-Logo-black.svg";
import remaxLogo from "../../assets/img/clients/Remax.svg";
// import virtuselLogo from "../../assets/img/featured/virtusel.svg";
import wolfwizardLogo from "../../assets/img/featured/wolfwizard.svg";
import fortuneLogo from "../../assets/img/clients/Fortune-Avenue-Logo-Final.svg";
import hyundaiLogo from "../../assets/img/clients/Hyundai.svg";
import kiaLogo from "../../assets/img/clients/Kia.svg";

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
    <div ref={sectionRef} className={`${classes.clients}`} id="bottom-anchor">
      <SectionHeading>Clients</SectionHeading>
      <div className={classes["clients-container"]}>
        <Client
          className={`${classes["client-loc-1"]} ${classes["big"]}`}
          imgColor={remaxLogo}
        />
        <Client
          className={`${classes["client-loc-2"]} ${classes["mid"]}`}
          imgColor={fortuneLogo}
        />
        <Client
          className={`${classes["client-loc-3"]} ${classes["big"]}`}
          imgColor={wolfwizardLogo}
        />
        <Client
          className={`${classes["client-loc-4"]} ${classes["big"]}`}
          imgColor={hyundaiLogo}
        />
        <Client
          className={`${classes["client-loc-5"]} ${classes["mid"]}`}
          imgColor={kiaLogo}
        />
        {/* <Client
          className={`${classes["client-loc-6"]} ${classes["small"]}`}
          imgColor={}
        />
        <Client
          className={`${classes["client-loc-7"]} ${classes["big"]}`}
          imgColor={}
        /> */}
      </div>
    </div>
  );
};

export default Clients;
