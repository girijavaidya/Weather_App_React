import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MdSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaCloudBolt } from "react-icons/fa6";
function App() {
  return (
    <div className="App">

      {/* Search Box */}
      <div className="search-wrapper">
        <input
          className="search-box"
          type="text"
          placeholder="Enter the City"
        />
      </div>

      {/* Weather Section */}
      <div className="weather-container">
        <div className="container">

          <div className="row">
            {/* <div className="col-md-6"> */}
              <div className="current-weather-location">
                <MdSunny className="sun-icon" />
                <div>
                  <h6>Today</h6>
                  <h1 className='fw-bold fs-1'>India</h1>
                  <h7 className='fw-semibold'>Temperature 17°C</h7>
                 
                </div>
              </div>
            </div>
          </div>

          {/* 3 Boxes */}
          <div className="three-block">
            <div className="box">
              <div className='weather-check'>
              <h5 className='fw-bold text-white'>Wednesday</h5>
              <IoMdSunny className='text-grey fs-1'  />
              <h5 className='text-white'>21°C</h5>
              </div>
            </div>
            <div className="box">
              <div className='weather-check'>
              <h5 className='fw-bold text-white'>Thrusday</h5>
              <FaCloudBolt className='text-grey fs-1'  />
                <h5 className='text-white'>21°C</h5>
              </div>
            </div>
            <div className="box">
              <div className='weather-check'>

              <h5 className='fw-bold text-white'>Friday</h5>
               <IoMdSunny className='text-grey fs-1'  />
                 <h5 className='text-white'>21°C</h5>
               </div>
            </div>
            <div className="box">
              <div className='weather-check'>
              <h5 className='fw-bold text-white'>Saturday</h5>
              <FaCloudBolt className='text-grey fs-1'  />
                <h5 className='text-white'>21°C</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

    // </div>
  );
}

export default App;
