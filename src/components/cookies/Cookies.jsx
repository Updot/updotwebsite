import { Fragment, useState } from "react";
import classes from "./Cookies.module.css";
const Cookies = () => {
  const [isAccepted, setIsAccepted] = useState(undefined);
  return (
    <Fragment>
      {isAccepted === undefined ? (
        <div className={classes.cookie}>
          <div className={classes["cookie-container"]}>
            <h4>Cookies</h4>
            <p>
              Shadapadey Shadapadey Shadapadey Shadapadey Shadapadey Shadapadey
              Shadapadey Shadapadey Shadapadey Shadapadey Shadapadey Shadapadey
            </p>
            <div>
              <button className="btn" onClick={() => setIsAccepted(true)}>
                Accept
              </button>
              <button className="btn" onClick={() => setIsAccepted(false)}>
                Decline
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Cookies;
