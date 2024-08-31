import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function WeatherForm() {
  const [userCity, setUserCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const displayClass = "display-container";

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
        console.log(body.data);
        if (body.data.cod == "404") {
          setErrMessage(body.data.message);
          setCityName("");
          setTemp("");
          setDesc("");
        } else {
          setCityName(body.data.name);
          setTemp(body.data.main.temp);
          setDesc(body.data.weather[0].description);
          setSunrise(body.data.sys.sunrise);
          setSunset(body.data.sys.sunset);
        }
      })
      .then(() => {
        const currentTime = Date.now();
        console.log("sunrise:", sunrise, sunrise.length);
        console.log("sunset", sunset, sunset.length);
        console.log("current time", currentTime, currentTime.length);
      })
      .catch((err) => {
        setErrMessage(err);
      });
  }

  return (
    <>
      {cityName.length != "" ? (
        <WeatherDisplay
          className={displayClass}
          cityName={cityName}
          temperature={temp}
          description={desc}
        ></WeatherDisplay>
      ) : (
        <div>
          <h3>Enter your city of choice</h3>
          <p>{errMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Destination: </label>
        <input value={userCity || ""} onChange={handleChange} id="city"></input>
        <button type="submit">Take me there</button>
      </form>
    </>
  );
}

export default WeatherForm;
