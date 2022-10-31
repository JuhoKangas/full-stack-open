import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const CountryInfo = ({ data }) => {
	const [weatherData, setWeatherData] = useState([]);

	const capital = data.capital[0];
	const APIkey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${APIkey}`
			)
			.then((res) => {
				setWeatherData(res.data);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (data.length !== 0) {
		let countryLanguages = Object.values(data.languages);

		return (
			<div>
				<h1>{data.name.common}</h1>
				<p>capital {data.capital}</p>
				<p>area {data.area}</p>
				<b>languages: </b>
				<ul>
					{countryLanguages.map((language) => (
						<li key={language}>{language}</li>
					))}
				</ul>
				<img src={data.flags["png"]} alt="" />
				<Weather country={data} weather={weatherData} />
			</div>
		);
	}
};

export default CountryInfo;
