// components/CountryList.js
import React from "react";

function CountryList({ countries, onSelect }) {
  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code} onClick={() => onSelect(country)}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
