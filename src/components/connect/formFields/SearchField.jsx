import React, { useEffect, useState } from "react";
import { countries } from "../../../util/countries";
import Input from "../formFields/Input";
import "./SearchField.modules.scss";

function SearchField({ formState, setFormState }) {
  const [expand, setExpand] = useState(false);

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
    setExpand(true);
    setFormState({ ...formState, countryCode: val });
  };
  return (
    <div className="search-field">
      <Input
        type="text"
        placeholder="Code*"
        value={formState.countryCode}
        handleChange={(val) => handleInputChange(val)}
        // autoComplete="tel-country-code"
        className="search-input"
        inputStyle={{ textAlign: "center" }}
      />
      {expand && (
        <div className="dropdown-options">
          {filteredData.map((item) => (
            <li
              className="option"
              onClick={() =>
                setFormState({
                  ...formState,
                  countryCode: `${item.dial_code} ${item.code}`,
                })
              }
            >
              {item.dial_code && <span>{item.dial_code}</span>}
              {item.code && <span>{item.code}</span>}
              <hr className="btm-brdr" />
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchField;
