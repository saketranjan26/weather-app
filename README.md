# 🌤️ Weather Forecast App

A simple and elegant weather app built with **React + Vite + Recoil**, using the [WeatherAPI.com](https://www.weatherapi.com/) service. It allows users to search for a city and get the current weather along with a 3-day forecast.

---

## 🚀 Features

- 🔍 **Search Weather by City**
- 📆 **3-Day Weather Forecast**
- 🌡️ **Current Temperature, Wind, Humidity, Feels Like, Precipitation**
- 📦 **Recoil for State Management**
- ⚡ **Vite for Fast Development**

---

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🌈 Tailwind CSS (for styling)
- 📡 Axios (for API requests)
- 🔄 Recoil (state management)
- 🌐 WeatherAPI.com (for weather data)

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add WeatherAPI Key

Create a .env file in the root of the project and add your API key:
```bash
VITE_API_KEY=your_weatherapi_key_here
```

### 4. Start the Dev Server

```bash
npm run dev
```

---

## 📁 Folder Structure

``` bash
src/
├── atoms/
│   └── weatherData.js          # Recoil atom for weather data
├── components/
│   ├── Appbar.jsx
│   ├── SearchBar.jsx
│   ├── CardHeader.jsx
│   ├── CardContent.jsx
│   ├── CardFooter.jsx
│   └── DayForecast.jsx
├── App.jsx                     # Main component with layout
├── main.jsx                    # Vite app entry point
.env                            # API Key (ignored in Git)
```

---

✨ Planned Features (Not Yet Implemented)

* 📍 Location detection using browser GPS
*  🎥 Weather-based dynamic video or image backgrounds

