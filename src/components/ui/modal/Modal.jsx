import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({ isModalOpen, setIsModalOpen, children }) {
  const clickHandle = (e) => {
    if (
      e.target.classList[0].includes("close") ||
      !e.target.classList[0].includes("modal")
    )
      setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <div
          onClick={clickHandle}
          key={Math.random()}
          className={`modal-container`}
        >
          <div className={classes["overlay"]}></div>
          <div className={classes["modal"]}>
            <div className={classes["close"]}>X</div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")
  );
}
