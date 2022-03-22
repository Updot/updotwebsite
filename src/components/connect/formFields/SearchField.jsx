import React from "react";
import { countries } from "../../../util/countries";
import Input from "../formFields/Input";
import "./SearchField.modules.scss";
function SearchField({ query, setQuery, expand, formState, setFormState }) {
  const filteredData = countries.filter(
    (item) => item.name.toLowerCase() === formState.countryCode.toLowerCase()
  );
  return (
    <div>
      <Input
        type="text"
        placeholder="Code*"
        // value={formState.countryCode}
        // handleChange={(val) =>
        //   setFormState({ ...formState, countryCode: val })
        // }
        value={formState.countryCode}
        handleChange={(val) => setFormState({ ...formState, countryCode: val })}
        autoComplete="tel-country-code"
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
                  countryCode: `${item.dial_code} ${item.name}`,
                })
              }
            >
              {item.dial_code && <span>{item.dial_code}</span>}
              {item.name && <span>{item.name}</span>}
              <hr className="btm-brdr" />
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchField;
