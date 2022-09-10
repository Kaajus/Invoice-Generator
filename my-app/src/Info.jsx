import React,{useState} from 'react'
import "./Info.css"

function Info(){
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [zip,setZip] = useState("");
    const [country,setCountry] = useState("");
    const [state,setState] = useState("");


    const companyName = (e) => {
        setName(e.target.value);
    }

    const emailFunc = (e) => {
        setEmail(e.target.value);
    }

    const addressFunc = (e) => {
        setAddress(e.target.value);
    }

    const cityFunc = (e) => {
        setCity(e.target.value);
    }

    const zipFunc = (e) => {
        setZip(e.target.value);
    }

    const countryFunc = (e) => {
        setCountry(e.target.value);
    }

    const stateFunc = (e) => {
        setState(e.target.value);
    }
    
    return(
    <div>

        <div className='row-1'>
            <div className='right-padding-div'>
                <input placeholder='Company Name' onChange={companyName} value={name} />
                <div>{name}</div>
            </div>

            <input placeholder='Email' onChange={emailFunc} value={email} />
            <div>{email}</div>
        </div>

        <div className='address-row'>
            <input placeholder='Address' onChange={addressFunc} value={address} />
            <div>{address}</div> 
        </div>

        <div className='third-row'>
            <div className='right-padding-div'>
                <input placeholder='City' onChange={cityFunc} value={city} />
                <div>{city}</div> 
            </div>


            <input placeholder='ZIP' onChange={zipFunc} value={zip} />
            <div>{zip}</div> 
        </div>

        <div className='fourth-row'>
            <div className='right-padding-div'>
                <input placeholder='Country/Region' onChange={countryFunc} value={country} />
                <div>{city}</div> 
            </div>

            <input placeholder='State/Province' onChange={stateFunc} value={state} />
            <div>{state}</div> 
        </div>

        
    </div>
        
            



    );
}

export default Info;