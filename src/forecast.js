import React, { useState, useEffect} from 'react';
import Weather from './weatherData';
import "./weather.css";

function Forecast (){

// state - 
  const [countryName, setCountryName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [temp, setTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [cityName, setCityName] = useState('')
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  const [query, setQuery] = useState('delhi');
  const [search, setSearch] = useState('');
  // const [load, setLoad] = useState(false);

  // Reach-Hook Lifecycle Methods -
  
  useEffect(()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=11a9b4da876bfdca782f464bb924c855`;
    fetch(url)
      .then(response => response.json())
      .then(data =>{
          //   setWeatherData(data)
            setCityName(data.name)
            setCountryName(data.sys.country)
            setDescription(data.weather[0].description)
            setIcon(data.weather[0].icon)
            setTemp(data.main.temp)
            setMaxTemp(data.main.temp_max)
            setMinTemp(data.main.temp_min)
            setSunrise(data.sys.sunrise)
            setSunset(data.sys.sunset)
        }
      )
      .catch(error => console.log(error));

  },[query])

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }


  return(
    <div>
        {/* {console.log(this.state.weatherData)} */}
        
          <div className="input-box">
            <input className="search-bar" onChange={updateSearch} type="text" placeholder="Enter Your City" value={search}/>
            <button className="search-button" onClick={getSearch} title="search your city"><i className="fas fa-search-location"></i></button>
          </div>
        
        <Weather  
            countryName={countryName} 
            description={description} 
            icon={icon} 
            temp={temp} 
            cityName={cityName}
            maxTemp={maxTemp}
            minTemp={minTemp}
            sunrise={sunrise}
            sunset={sunset}
         />
      </div>
  )
}

export default Forecast;