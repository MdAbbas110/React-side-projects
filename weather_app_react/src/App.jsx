import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a7f25e4a93f81b7664bb6aafdf049dea`;

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
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60℉</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        {/* bottom part of the page */}
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65℃</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
