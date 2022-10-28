const CountryInfo = ({ data }) => {
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
			</div>
		);
	}
};

export default CountryInfo;
