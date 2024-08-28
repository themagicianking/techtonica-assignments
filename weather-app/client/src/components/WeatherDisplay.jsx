import "../WeatherDisplay.css";

function WeatherDisplay(props) {
  return (
    <>
      <div className="display-container">
        <h2>{props.cityName}</h2>
        <p>{props.temperature}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default WeatherDisplay;
