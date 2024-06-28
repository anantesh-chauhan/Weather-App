import './infoBox.css'

function InfoBox({info}){
    // let info={
    //     city:"Mau",
    //     feels_like:30,
    //     humidity: 75,
    //     temp: 20,
    //     temp_max: 25,
    //     temp_min: 17,
    //     wind_speed:  1.5       ,
    //     wind_deg: 45,
    //  }
    return(
        <div className='infobox'>
          <h1>Weather</h1>
          <h1>City: {info.city}</h1>
          <p>Feels Like: {info.feels_like}</p>
          <p>Temp: {info.temp}</p>
          <p>Wind Speed : {info.wind_speed}</p>
        </div>
    )
}
export default InfoBox ;