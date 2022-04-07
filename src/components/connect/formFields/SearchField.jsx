import React, { useEffect, useState } from "react";
import { countries } from "../../../util/countries";
import "./SearchField.modules.scss";
import { useSelector } from "react-redux";
import dArrowWhite from "../../../assets/img/d-arrow-white.svg";
import dArrowDark from "../../../assets/img/d-arrow-dark.svg";

function SearchField({ formState, setFormState }) {
  const [expand, setExpand] = useState(false);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  const filteredData = countries.filter((item) =>
    item.dial_code.toLowerCase().includes(formState.countryCode.toLowerCase())
  );

  useEffect(() => {
    const eventHandler = (e) => {
      if (expand) setExpand(false);
    };
    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, [expand]);

  const handleInputChange = (val) => {
    setFormState({ ...formState, countryCode: val });
  };

  const dArrow = isLightThemeActive ? dArrowWhite : dArrowDark;

  return (
    <div className="search-field" onClick={() => setExpand((p) => !p)}>
      <fieldset
        style={{
          backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
          color: isLightThemeActive ? "#000" : "#fff",
        }}
      >
        <input
          type="text"
          placeholder="Code*"
          value={formState.countryCode}
          onChange={(e) => handleInputChange(e.target.value)}
          className="search-input"
          style={{
            color: isLightThemeActive ? "#000" : "#fff",
          }}
        />
        <img
          src={dArrow}
          alt="down arrow"
          style={{
            filter: isLightThemeActive ? "invert(1)" : "invert(0)",
          }}
        />
      </fieldset>
      {expand && (
        <div
          className="dropdown-options"
          style={{
            backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
            height: filteredData.length === 0 ? "0rem" : " 20rem",
          }}
        >
          {filteredData.map((item) => (
            <li
              className="option"
              style={{
                backgroundColor: isLightThemeActive ? "#ECECEC" : "#1d1d1d",
              }}
              onClick={() =>
                setFormState({
                  ...formState,
                  countryCode: `${item.dial_code} ${item.code}`,
                })
              }
            >
              {item.dial_code && (
                <span
                  style={{
                    color: isLightThemeActive ? "#000" : "#fff",
                  }}
                >
                  {item.dial_code}
                </span>
              )}
              {item.code && (
                <span
                  style={{
                    color: isLightThemeActive ? "#000" : "#fff",
                  }}
                >
                  {item.code}
                </span>
              )}
              <hr
                className="btm-brdr"
                style={{
                  backgroundColor: isLightThemeActive ? "#000" : "#fff",
                }}
              />
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchField;
