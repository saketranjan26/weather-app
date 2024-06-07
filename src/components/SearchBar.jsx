import { useState } from "react"
import axios from "axios"
import { useSetRecoilState } from "recoil"
import { weatherData } from "../atoms/weatherData"

export function SearchBar(){

    const [city,setCity] = useState("")
    const setWeatherData = useSetRecoilState(weatherData)

    async function getData(event){
        event.preventDefault()

        try{
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=8&aqi=no&alerts=no`)
            setWeatherData(response)
            
        }catch(e){
            if(e.response.data.error.code ===1006)
                console.log("enter valid city name")
            else if(e.response.data.error.code ===1003)
                console.log("Please enter city name")
            else
                console.log("error getting weather data")
        }      
      }

    return <div>
                <form className="max-w-sm mx-auto">   
                    <div className="relative">
                        <div className="absolute inset-y-0  flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input onChange={(e)=>{
                            setCity(e.target.value)            
                        }}type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500  " placeholder="Enter city name" required />
                        <button onClick={getData}  className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  "  >Check Weather</button>
                    </div>
                </form>
            </div>
} 

