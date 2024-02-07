import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries of the World</h1>
      </header>
      <div className="container">
        <div className="country-list">
          <CountryList countries={countries} onSelect={handleCountrySelect} />
        </div>
        <div className="country-detail">
          <CountryDetail country={selectedCountry} />
        </div>
      </div>
    </div>
  );
}

export default App;
