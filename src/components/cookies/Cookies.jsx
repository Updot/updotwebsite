import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import classes from "./Cookies.module.scss";
import { useSelector } from "react-redux";
const Cookies = () => {
  const [isResponded, setIsResponded] = useState(false);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const theme = isLightThemeActive ? "Light" : "Dark";

  const sendAcceptedCookieInfo = async () => {
    const res = await axios.post(
      "https://updotweb-backend-2xv8y.ondigitalocean.app/api/cookies/accept",
      {
        theme,
        deviceInfo: window.clientInformation.userAgent,
      }
    );
    return res;
  };
  const sendDeclinedCookieInfo = async () => {
    const res = await axios.post(
      "https://updotweb-backend-2xv8y.ondigitalocean.app/api/cookies/decline",
      {
        theme,
        deviceInfo: window.clientInformation.userAgent,
      }
    );
    return res;
  };

  useEffect(() => {
    const cookieInfo = JSON.parse(localStorage.getItem("updotCookie"));
    const updateCookieInfo = async () => {
      const res = await axios.post(
        "https://updotweb-backend-2xv8y.ondigitalocean.app/api/cookies/update",
        {
          id: cookieInfo.cookieId,
          theme,
        }
      );
      return res;
    };
    if (cookieInfo) {
      setIsResponded(true);
      if (cookieInfo.CookieAccepted) {
        updateCookieInfo()
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
    } else {
      setIsResponded(false);
    }
  }, [theme]);

  const accept = () => {
    setIsResponded(true);
    sendAcceptedCookieInfo()
      .then((res) => {
        localStorage.setItem(
          "updotCookie",
          JSON.stringify({
            CookieAccepted: true,
            cookieId: res.data.data.id,
          })
        );
      })
      .catch((error) => console.log(error));
  };

  const decline = () => {
    setIsResponded(true);
    sendDeclinedCookieInfo()
      .then((res) => {
        localStorage.setItem(
          "updotCookie",
          JSON.stringify({
            CookieAccepted: false,
          })
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <Fragment>
      {!isResponded && (
        <div className={classes.cookie}>
          <div className={classes["cookie-container"]}>
            <h4>Cookies</h4>
            <p>
              We baked some cookies that you have to accept. This is to ensure
              we can improve further. Hope you don't mind?
            </p>
            <div>
              <button className="btn" onClick={() => accept()}>
                Accept
              </button>
              <button className="btn" onClick={() => decline()}>
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cookies;
