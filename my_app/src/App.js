import './App.css';
import { MdSunny } from "react-icons/md";

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
            <div className="col-md-4">
              <div className="current-weather-location">
                <MdSunny className="sun-icon" />
                <div>
                  <h3>Today</h3>
                  <h1>India</h1>
                  <h3>Temperature 17°C</h3>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Boxes */}
          <div className="three-block">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
