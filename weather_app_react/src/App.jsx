import { useState } from 'react';
import axios from 'axios';

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a7f25e4a93f81b7664bb6aafdf049dea`;

  return (
    <section className='app'>
      <main className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60℉</h1>
          </div>
          <div className='description'>
            <p>Clouds and rain</p>
          </div>
        </div>
        {/* bottom part of the page */}
        <div className='bottom'>
          <div className='feels'>
            <p>65℃</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>12 MPH</div>
        </div>
      </main>
    </section>
  );
}

export default App;
