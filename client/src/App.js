import React, { useState } from "react";
import CityForm from "./components/CityForm";
import NavBar from "./components/Navbar";
import WeatherReport from "./components/WeatherReport";
import axios from "axios";
import Error from "./components/Error";

function Report() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // Function for handling city input changes by user
  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError();
  };

  // Getting weather reports
  const getData = async () => {
    setLoading(true);
    setData();
    await axios
      .get(`http://localhost:8000/api/get_report/${city}`)
      .then((response) => {
        if (response.data.error) {
          // Seting no data error
          setError(response.data.error);
        } else if (response.data.exception_error) {
          // Seting no data exception errors
          setError(response.data.exception_error);
        } else {
          //seting response data
          setData(response.data.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };
  return (
    <div className="">
      {/* Navbar component */}
      <NavBar />
      <div className="w-full lg:w-6/12 lg:ml-3/12">
        {/* Form component to enter the city name */}
        <CityForm
          city={city}
          handleInputChange={handleInputChange}
          onClick={getData}
        />
        {loading && <div className="p-5">Loading ...</div>}
        {/* Weather report card component */}
        {data && <WeatherReport report={data}></WeatherReport>}
        {/* Error message component */}
        {error && <Error error={error} />}
      </div>
    </div>
  );
}

export default Report;
