import Country from "./Country";

const List = ({ data }) => {
	if (data.length === 1) {
		return <Country data={data} />;
	} else if (data.length <= 10) {
		return (
			<div>
				{data.map((country) => (
					<div>{country.name.common}</div>
				))}
			</div>
		);
	}
	return <p>too many matches, specify another filter</p>;
};

export default List;
