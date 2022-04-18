import React, { useEffect, useState, useCallback } from "react";
import "./customCursor.scss";
import { useGlobalStateContext } from "../../context/globalContext";

function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((event) => {
    const { clientX: x, clientY: y } = event;
    setCursorPos({ x, y });
  }, []);

  const { cursorType, navOpen } = useGlobalStateContext();

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <>
      {!!cursorType && navOpen ? (
        <div
          className="hovered"
          data-name="nav-btn"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69.536"
            height="69.536"
            viewBox="0 0 69.536 69.536"
          >
            <g transform="translate(-439.732 -749.732)">
              <line
                x2="20"
                y2="20"
                transform="translate(441.5 751.5)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
              <line
                x1="20"
                y2="20"
                transform="translate(441.5 751.5)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div
          className="cursor-main"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        ></div>
      )}
    </>
  );
}

export default CustomCursor;
