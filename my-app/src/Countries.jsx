import React, { useState } from "react";
import "./Info.css";

function Countries() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [isCanada, setIsCanada] = useState(false);
  const [isPakistan, setIsPakistan] = useState(false);

  const countryFunction = (e) => {
    setCountry(e.target.value);
    if (e.target.value === "Pakistan") {
      setIsPakistan(true);
      setIsCanada(false);
      console.log("Pakistan has been selected");
    } else if (e.target.value === "Canada") {
      setIsCanada(true);
      setIsPakistan(false);
      console.log("Canada has been selected");
    }
  };

  const stateFunction = (e) => {
    setState(e.target.value);
    console.log(e.target.value," is the selected state");
  };

  return (
    <div>
      <div className="row-1">
        <div className="right-padding-div">
          <select
            name="countries"
            placeholder="Countries"
            value={country}
            onChange={countryFunction}
          >
            <option disabled={true} value="">
              Select Country
            </option>
            <option value="Pakistan">Pakistan</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </div>

        {isCanada ? (
          <div>
            <select
              name="states"
              placeholder="State"
              value={state}
              onChange={stateFunction}
            >
              <option disabled={true} value="">
                Select State
              </option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Northwest Territories">
                Northwest Territories
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
            </select>
          </div>
        ) : undefined}

        {isPakistan ? (
          <div>
            <select
              name="states"
              placeholder="State"
              value={state}
              onChange={stateFunction}
            >
              <option disabled={true} value="">
                Select State
              </option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="KPK">KPK</option>
            </select>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default Countries;
