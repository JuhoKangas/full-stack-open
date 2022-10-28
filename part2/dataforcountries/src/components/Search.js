const Search = (props) => {
	return (
		<div>
			<input
				type="text"
				onChange={props.handleChange}
				value={props.value}
			/>
		</div>
	);
};

export default Search;
