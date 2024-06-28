import { useState } from 'react';
import './SearchBox.css' ;
function Search(updateInfo){
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
     const API_KEY="2469345eff87fa79a0358f02eef42526";
     
     let getWeatherInfo=async()=>{
        let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce=await responce.json();
        // console.log(jsonResponce);
        let result={
            city: city,
            feels_like: jsonResponce.main.feels_like,
            humidity: jsonResponce.main.humidity,
            temp: jsonResponce.main.temp,
            temp_max: jsonResponce.main.temp_max,
            temp_min: jsonResponce.main.temp_min,
            wind_speed: jsonResponce.wind.speed,
            wind_deg: jsonResponce.wind.deg,

        }
        console.log(result);
        return result ;
     }

    let handleChange=(event)=>{
        console.log(event.target.value);
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }
    return(
        <form className='searchbox' onSubmit={handleSubmit}>
            <label htmlFor="city">City</label><br></br>
            <input type="text" id="city" placeholder='City' value={city} onChange={handleChange}/><br></br>
            <button>Search</button>
            {/* <i>Anantesh</i> */}
        </form>
    )
}

export default Search ;