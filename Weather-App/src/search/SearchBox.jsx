import { useState } from 'react';
import './SearchBox.css';
import InfoBox from '../infoBox/infoBox';
function Search(updateInfo) {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Mau",
        feels_like: 30,
        humidity: 75,
        temp: 20,
        temp_max: 25,
        temp_min: 17,
        wind_speed: 1.5,
        wind_deg: 45,
    }
    )
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2469345eff87fa79a0358f02eef42526";

    let getWeatherInfo = async () => {
        let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        // console.log(jsonResponce);
        let result = {
            city: city,
            feels_like: jsonResponce.main.feels_like,
            humidity: jsonResponce.main.humidity,
            temp: jsonResponce.main.temp,
            temp_max: jsonResponce.main.temp_max,
            temp_min: jsonResponce.main.temp_min,
            wind_speed: jsonResponce.wind.speed,
            wind_deg: jsonResponce.wind.deg,

        }
        setWeatherInfo({
            city: result.city,
            feels_like:result.feels_like,
            humidity: result.humidity,
            temp:result.temp,
            temp_max:result.temp_max,
            temp_min: result.temp_min,
            wind_speed: result.wind_speed,
            wind_deg: result.wind_deg,
        });
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        // setWeatherInfo({
        //     city: result.city,
        //     feels_like:result.feels_like,
        //     humidity: result.humidity,
        //     temp:resul.temp,
        //     temp_max:result.temp_max,
        //     temp_min: rsult.temp_min,
        //     wind_speed: result.wind_speed,
        //     wind_deg: result.wind_deg,
        // });
        updateInfo(newInfo);
    }
    return (
        <>
            <form className='searchbox' onSubmit={handleSubmit}>
                <label htmlFor="city">City</label><br></br>
                <input type="text" id="city" placeholder='City' value={city} onChange={handleChange} /><br></br>
                <button>Search</button>
                {/* <i>Anantesh</i> */}
            </form>
            {/* <InfoBox prop={[result]}/> */}
            <InfoBox info={weatherInfo}/>
        </>

    )
}

export default Search;