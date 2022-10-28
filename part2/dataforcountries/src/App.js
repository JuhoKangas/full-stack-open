import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";

function App() {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((res) => {
			setCountries(res.data);
		});
	}, []);

	console.log(filteredCountries);

	const handleChange = (e) => {
		setSearch(e.target.value);

		setFilteredCountries(
			countries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			)
		);
	};

	return (
		<div>
			<h1>Data for Countries</h1>
			<Search value={search} handleChange={handleChange} />
			<List data={filteredCountries} />
		</div>
	);
}

export default App;
