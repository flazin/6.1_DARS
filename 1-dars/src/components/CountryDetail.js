// components/CountryDetail.js
import React from "react";

function CountryDetail({ country }) {
  return (
    <div>
      <h2>Country Details</h2>
      {country ? (
        <div>
          <h3>{country.name}</h3>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name}`}
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      ) : (
        <p>Select a country from the list to view details.</p>
      )}
    </div>
  );
}

export default CountryDetail;
