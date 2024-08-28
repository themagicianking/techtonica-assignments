import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function WeatherForm() {
  const [userCity, setUserCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUserCity(e.target.value);
    fetchCityData();
  }

  function handleChange(e) {
    setUserCity(e.target.value);
  }

  async function fetchCityData() {
    await fetch(`http://localhost:5000/weather?cityName=${userCity}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setCityName(body.data.name);
        setTemp(body.data.main.temp);
        setDesc(body.data.weather[0].description);
      });
  }

  return (
    <>
      <WeatherDisplay
        cityName={cityName}
        temperature={temp}
        description={desc}
      ></WeatherDisplay>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Destination: </label>
        <input value={userCity || ""} onChange={handleChange} id="city"></input>
        <button type="submit">Take me there</button>
      </form>
    </>
  );
}

export default WeatherForm;
