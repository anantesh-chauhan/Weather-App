import { useState } from 'react';
import InfoBox from '../infoBox/infoBox';
import Search from '../search/SearchBox';
import './weather.css';

function Weather(){
    // let [weatherInfo,setWeatherInfo]=useState({
    //         city:"Mau",
    //         feels_like:30,
    //         humidity: 75,
    //         temp: 20,
    //         temp_max: 25,
    //         temp_min: 17,
    //         wind_speed:  1.5       ,
    //         wind_deg: 45,
    //     }
    // )
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
     <div className='weather'>
        <h1>Weather</h1>
        <Search updateInfo={updateInfo} />
        {/* <InfoBox info={weatherInfo}/> */}
     </div>
    )
}
export default Weather ;