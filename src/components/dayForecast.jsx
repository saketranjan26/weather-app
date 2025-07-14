import { useRecoilValue } from "recoil"
import { weatherData } from "../atoms/weatherData"

export default function DayForecast() {

    const dayData = useRecoilValue(weatherData);
    const data = dayData.data.forecast.forecastday;

    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">3-Day Weather Forecast</h1>
          <p className="text-gray-500 dark:text-gray-500">{new Date().toLocaleDateString()}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => {
            
            const date = new Date(new Date().getTime() + i * 86400000)
                 
            const weatherData = {
              dayOfWeek: date.toLocaleDateString("en-US", { weekday: "short" }),
              date: date.toLocaleDateString("en-US", { month: "numeric", day: "numeric" }),
              icon: data[i].day.condition.icon,
            
              h: data[i].day.maxtemp_c,
              l: data[i].day.mintemp_c,
              
              description:data[i].day.condition.text,
              
            }
            return (
              <div key={i} className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{weatherData.dayOfWeek}</p>
                  <p className="text-gray-500">{weatherData.date}</p>
                </div>
                <div className="flex items-center justify-between">
                <div className="">
                        <img src={weatherData.icon}/>
                    </div>
                    <div>
                        <p className="font-medium">{weatherData.h}°C</p>
                        <p className="text-gray-500">{weatherData.l}°C</p>
                    </div>
                </div>
                <p>{weatherData.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  
  
