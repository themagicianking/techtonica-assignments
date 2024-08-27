import { useState } from "react";
function WeatherForm() {
  const [userCity, setUserCity] = useState("");
  const [cityData, setCityData] = useState("");

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
        setCityData(JSON.stringify(body.data));
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Destination</label>
        <input value={userCity || ""} onChange={handleChange} id="city"></input>
        <button type="submit">Take me there</button>
      </form>
      <p>{userCity}</p>
      <p>{cityData}</p>
    </>
  );
}

export default WeatherForm;
