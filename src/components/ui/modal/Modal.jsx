import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("portal");

export default function Modal({ isModalOpen, setIsModalOpen, children }) {
  const clickHandle = (e) => {
    if (
      e.target.classList[0].includes("close") ||
      !e.target.classList[0].includes("modal")
    )
      setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [isModalOpen]);

  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <Fragment>
          {ReactDOM.createPortal(
            <Backdrop onClose={clickHandle} />,
            portalElement
          )}
          {ReactDOM.createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            portalElement
          )}
        </Fragment>
      )}
    </>,
    document.getElementById("portal")
  );
}
