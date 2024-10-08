function WeatherDisplay(props) {
  return (
    <>
      <div className={props.className}>
        <h2>{props.cityName}</h2>
        <p>{props.temperature}&deg;F</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default WeatherDisplay;
