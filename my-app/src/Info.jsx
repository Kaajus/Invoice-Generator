import React, { useState } from "react";
import "./Info.css";

function Info() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [isCanada, setIsCanada] = useState(false);

  const companyName = (e) => {
    setName(e.target.value);
  };

  const emailFunc = (e) => {
    setEmail(e.target.value);
  };

  const addressFunc = (e) => {
    setAddress(e.target.value);
  };

  const cityFunc = (e) => {
    setCity(e.target.value);
  };

  const zipFunc = (e) => {
    setZip(e.target.value);
  };

  const countryFunc = (e) => {
    setCountry(e.target.value);
    if(e.target.value === "Canada"){
        setIsCanada(true);
    }
  };

  const stateFunc = (e) => {
    setState(e.target.value);
  };

//   function checkCanada() {
//     /* this is my onChangeHandler */
//     if (country === "Canada") {
//       return true;
//     }
//     return false;
//   }

  return (
    <div>
      <div className="row-1">
        <div className="right-padding-div">
          <input
            placeholder="Company Name"
            onChange={companyName}
            value={name}
          />
          
        </div>

        <input placeholder="Email" onChange={emailFunc} value={email} />
      </div>

      <div className="address-row">
        <input placeholder="Address" onChange={addressFunc} value={address} />
      </div>

      <div className="third-row">
        <div className="right-padding-div">
          <input placeholder="City" onChange={cityFunc} value={city} />
        </div>

        <input placeholder="ZIP" onChange={zipFunc} value={zip} />
      </div>

      <div className="fourth-row">
        <div className="right-padding-div">
          <select
            name="countries"
            onChange={countryFunc}
            placeholder="Country"
            value={country}
          >
            <option value="" disabled selected>
              Select Country
            </option>
            <option value="Pakistan">Pakistan</option>
            <option value="Canada">Canada</option>
          </select>

        </div>

        {isCanada ? (
          <div className="dropdown">
            <input
              placeholder="State/Province"
              onChange={stateFunc}
              value={state}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default Info;
