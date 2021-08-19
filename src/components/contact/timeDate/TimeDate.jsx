import { useEffect, useRef, useState } from "react";

import weatherIcon from "../../../assets/img/weather-icon.svg";

import classes from "./TimeDate.module.css";

const TimeDate = () => {
  const [time, setTime] = useState({});
  const [date, setDate] = useState({});
  const minutePinRef = useRef(null);
  const hourPinRef = useRef(null);
  useEffect(() => {
    const setClock = () => {
      const now = new Date();
      const localTime = now.getTime();
      const localOffset = now.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const indiaOffset = 5.5;
      const indiaTime = utc + 3600000 * indiaOffset;
      const homeNow = new Date(indiaTime);
      const seconds = homeNow.getSeconds();
      const mins = homeNow.getMinutes();
      const minuteAngle = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minutePinRef.current.style.transform = `rotate(${minuteAngle}deg) translateX(26%)`;
      const hour = homeNow.getHours();
      const hourAngle = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourPinRef.current.style.transform = `rotate(${hourAngle}deg) translateX(151%)`;
      setTime({ hour, mins, seconds });
    };
    setInterval(setClock, 1000);
  }, []);
  useEffect(() => {
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const indiaOffset = 5.5;
    const indiaTime = utc + 3600000 * indiaOffset;
    const homeNow = new Date(indiaTime);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setDate({
      day: days[homeNow.getDay()],
      date: homeNow.getDate(),
      month: months[homeNow.getMonth()],
      year: homeNow.getFullYear(),
    });
  }, []);
  return (
    <div className={classes["timedate-container"]}>
      <div className={classes["clock-container"]}>
        <div className={classes["clock"]}>
          <span
            ref={hourPinRef}
            className={`${classes["pin"]} ${classes["pin-hour"]}`}
          ></span>
          <span
            ref={minutePinRef}
            className={`${classes["pin"]} ${classes["pin-minute"]}`}
          ></span>
        </div>
      </div>
      <div className={classes["text-info-container"]}>
        <div className={classes["datetime"]}>
          <p className={classes["time"]}>
            {`${time.hour}:${time.mins < 10 ? `0${time.mins}` : time.mins}:${
              time.seconds < 10 ? `0${time.seconds}` : time.seconds
            } IST`}
          </p>
          <p className={classes["date"]}>
            {`${date.day}, ${date.date} ${date.month} ${date.year}`}
          </p>
        </div>
        <div className={classes["weather"]}>
          <img src={weatherIcon} alt="cloudy" />
          <p className={classes["weather-text"]}>{`25°C AQI 99`}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeDate;
