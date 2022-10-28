import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ data }) => {
	const [countryInfo, setCountryInfo] = useState([]);

	const handleClick = () => {
		if (countryInfo.length === 0) {
			setCountryInfo(data);
		} else {
			setCountryInfo([]);
		}
	};
	return (
		<div>
			{data.name.common}
			<button onClick={handleClick}>
				{countryInfo.length === 0 ? "show" : "hide"}
			</button>
			{countryInfo.length !== 0 ? <CountryInfo data={countryInfo} /> : ""}
		</div>
	);
};

const Countries = ({ data }) => {
	return data.map((item) => {
		return <Country key={item.name.common} data={item} />;
	});
};

export default Countries;
