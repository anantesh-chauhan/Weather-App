
import './search/SearchBox.css'
import Search from "./search/SearchBox"
import InfoBox from './infoBox/infoBox'
import Weather from './weather/weather'

function App() {
  return (
    <>
     <h1>Weather App</h1>
     <h3>A weather app by Anantesh</h3>
      {/* <Search/>  */}
      {/* <h3>Be Cool</h3> */}
      {/* <InfoBox/>  */}
      <Weather/>
    </>
  )
}

export default App
