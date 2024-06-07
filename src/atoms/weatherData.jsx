import { atom } from "recoil";

export const weatherData = atom({
    key:"weatherDataAtom",
    default:{data:{
        "location": {
          "name": "London",
          "region": "City of London, Greater London",
          "country": "United Kingdom",
          "localtime": "2024-06-06 11:45"
        },
        "current": {
         
          "temp_c": 15,
         
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
           
          },
         
          "wind_kph": 15.1,
          
          "precip_mm": 0.11,
          
          "humidity": 59,
          
          "feelslike_c": 14.2,
          
        },
        "forecast": {
            "forecastday": [
                {
                    "date": "2024-06-06",
                    "date_epoch": 1717632000,
                    "day": {
                      "maxtemp_c": 17.7,
                      "mintemp_c": 9.6,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:45 AM",
                      "sunset": "09:14 PM"
                    }
                  },
                  {
                    "date": "2024-06-07",
                    "date_epoch": 1717718400,
                    "day": {
                      "maxtemp_c": 18.4,
                      "mintemp_c": 8.5,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:45 AM",
                      "sunset": "09:15 PM"
                    }
                  },
                  {
                    "date": "2024-06-08",
                    "date_epoch": 1717804800,
                    "day": {
                      "maxtemp_c": 17.3,
                      "mintemp_c": 9.5,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:44 AM",
                      "sunset": "09:16 PM"
                    }
                  },
                  {
                    "date": "2024-06-09",
                    "date_epoch": 1717891200,
                    "day": {
                      "maxtemp_c": 18.1,
                      "mintemp_c": 8,
                      "condition": {
                        "text": "Partly Cloudy ",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:44 AM",
                      "sunset": "09:16 PM"
                    }
                  },
                  {
                    "date": "2024-06-10",
                    "date_epoch": 1717977600,
                    "day": {
                      "maxtemp_c": 12.6,
                      "mintemp_c": 9.3,
                      "condition": {
                        "text": "Moderate rain",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:43 AM",
                      "sunset": "09:17 PM"
                    }
                  },
                  {
                    "date": "2024-06-11",
                    "date_epoch": 1718064000,
                    "day": {
                      "maxtemp_c": 11.4,
                      "mintemp_c": 8.4,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:43 AM",
                      "sunset": "09:18 PM"
                    }
                  },
                  {
                    "date": "2024-06-12",
                    "date_epoch": 1718150400,
                    "day": {
                      "maxtemp_c": 15.8,
                      "mintemp_c": 7.1,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
                      }
                    },
                    "astro": {
                      "sunrise": "04:43 AM",
                      "sunset": "09:18 PM"
                    }
                  }
            ]
        }
    }

}})