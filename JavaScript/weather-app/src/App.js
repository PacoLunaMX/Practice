import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { WE_API_KEY } from './API';
import { useState } from 'react';
import ForeCast from './components/forecast/ForeCast';




function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForCast, setCurrentForCast] = useState(null);



  const handleOnSearchChange = (searchData) =>{
    const [latitude, longitude]=searchData.value.split(" ");
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WE_API_KEY}`)
    const foreCastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WE_API_KEY}`)
    
    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async(response)=>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentForCast({city: searchData.label, ...forecastResponse});
        setCurrentWeather({city: searchData.label,...weatherResponse});

      } )
      .catch(err=>{
        console.log(err)
      })
      
    };




  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {currentForCast && <ForeCast data={currentForCast}/>}
      
    </div>

  );
}

export default App;
