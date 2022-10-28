import CountryInfo from "./CountryInfo";
import Countries from "./Countries";

const List = ({ data }) => {
	if (data.length === 1) {
		return <CountryInfo data={data[0]} />;
	} else if (data.length <= 10) {
		return <Countries data={data} />;
	}
	return <p>too many matches, specify another filter</p>;
};

export default List;
