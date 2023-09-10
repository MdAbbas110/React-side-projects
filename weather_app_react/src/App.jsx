import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a7f25e4a93f81b7664bb6aafdf049dea`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <section className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
          type='text'
        />
      </div>
      <main className='container'>
        <div className='top'>
          <div className='location'>
            <p className='data_name'>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()} ℉</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {/* bottom part of the page */}
        <div className='bottom'>
          <div className='feels'>
            {data.main ? (
              <p className='bold'>{data.main.feels_like.toFixed()}℉</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            {data.main ? (
              <p className='bold'>{data.main.humidity.toFixed()}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? (
              <p className='bold'>{data.wind.speed.toFixed()}MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>

        {/* bottom 2 part of the page */}
        <div className='bottom2'>
          <div className='feels'>
            {data.main ? (
              <p className='bold'>{data.main.temp_min.toFixed()}℉</p>
            ) : null}
            <p>Temp Min</p>
          </div>
          <div className='humidity'>
            {data.main ? (
              <p className='bold'>{data.main.temp_max.toFixed()}%</p>
            ) : null}
            <p>Temp_Max</p>
          </div>
          <div className='wind'>
            {data.wind ? (
              <p className='bold'>{data.main.pressure}⌁</p>
            ) : null}
            <p>Pressure</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
