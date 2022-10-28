const Weather = ({ country, weather }) => {
	if (weather.length !== 0) {
		return (
			<div>
				<h1>Weather in {country.capital}</h1>
				<p>
					temperature {(weather.main.temp - 273.15).toFixed(2)}{" "}
					Celcius
				</p>
				<p>wind {weather.wind.speed}m/s</p>
			</div>
		);
	}
};

export default Weather;
