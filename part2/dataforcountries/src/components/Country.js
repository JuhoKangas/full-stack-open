const Country = ({ data }) => {
	let countryLanguages = Object.values(data[0].languages);

	return (
		<div>
			<h1>{data[0].name.common}</h1>
			<p>capital {data[0].capital}</p>
			<p>area {data[0].area}</p>
			<b>languages: </b>
			<ul>
				{countryLanguages.map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={data[0].flags["png"]} alt="" />
		</div>
	);
};

export default Country;
