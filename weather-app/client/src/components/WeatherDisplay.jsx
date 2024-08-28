function WeatherDisplay(props) {
  return (
    <>
    <h2>The weather in {props.cityName}</h2>
    <p>{props.temperature}</p>
    <p>{props.description}</p>
    </>
  )
}
export default WeatherDisplay;
