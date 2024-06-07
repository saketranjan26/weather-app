
import { RecoilRoot, useRecoilValue } from "recoil"
import { CardContent } from "./components/CardContent"
import CardFooter from "./components/CardFooter"
import CardHeader from "./components/CardHeader"
import {SearchBar} from "./components/SearchBar"
import { weatherData } from "./atoms/weatherData"
import DayForecast from "./components/dayForecast"
import Appbar from "./components/Appbar"



function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
}

function MainApp(){
  const wData = useRecoilValue(weatherData)
  
  return (
    <>
      <Appbar/>
      <div>
          <div className="py-10 ">
            <SearchBar/>
            <CardHeader cityName={wData.data.location.name + ", " + wData.data.location.country} date={wData.data.location.localtime} iconLink={wData.data.current.condition.icon}/>
            <CardContent weather={wData.data.current.condition.text} temperature={wData.data.current.temp_c+"°"} precipitation={wData.data.current.precip_mm+" mm"} windSpeed={wData.data.current.wind_kph+" kmph"} feelsLike={wData.data.current.feelslike_c+"°"} humidity={wData.data.current.humidity} />
            <CardFooter/>
          </div>
          <div>
            <DayForecast/>
          </div>
      </div>
    </>
  )
}

export default App



 