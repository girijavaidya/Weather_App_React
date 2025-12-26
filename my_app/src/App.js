
import './App.css';

import { MdSunny } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <>
      <div className='search-wrapper'>
      <input className='search-box'  type='text' placeholder='Enter the City' />
      
</div>
      <div className='weather-container'>
        <div className='current-weather-location'>
         <MdSunny className='sun-icon' />
         <div>
          <h3>Today</h3>
          <h1>India</h1>
          <h3>Temperature 17°C</h3>

         </div>

        </div>

      </div>
     
      </>
    </div>
  );
}

export default App;
