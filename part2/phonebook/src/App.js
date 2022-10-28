import { useState, useEffect } from "react";
import axios from "axios";

const Person = ({ name, number }) => {
	return (
		<div>
			{name} {number}
		</div>
	);
};

const Title = ({ title }) => <h2>{title}</h2>;

const PersonForm = (props) => {
	return (
		<form>
			<div>
				name:{" "}
				<input value={props.newName} onChange={props.handleNameInput} />
			</div>
			<div>
				number:{" "}
				<input
					value={props.newNumber}
					onChange={props.handleNumberInput}
				/>
			</div>
			<div>
				<button onClick={props.handleAdd} type="submit">
					add
				</button>
			</div>
		</form>
	);
};

const Filter = (props) => {
	return (
		<div>
			filter shown with:{" "}
			<input
				type="text"
				value={props.search}
				onChange={props.handleSearch}
			/>
		</div>
	);
};

const Persons = ({ data }) => {
	return data.map((person) => (
		<Person key={person.id} name={person.name} number={person.number} />
	));
};

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((res) => {
			setPersons(res.data);
		});
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();

		const checkName = (obj) => obj.name === newName;

		if (persons.some(checkName)) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			const newPerson = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};
			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
		}
	};

	const handleNameInput = (e) => {
		setNewName(e.target.value);
	};

	const handleNumberInput = (e) => {
		setNewNumber(e.target.value);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
		const filteredArr = persons.filter((person) =>
			person.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setFilteredList(filteredArr);
	};

	return (
		<div>
			<Title title={"Phonebook"} />
			<Filter search={search} handleSearch={handleSearch} />
			<Title title={"add a new"} />
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleNameInput={handleNameInput}
				handleNumberInput={handleNumberInput}
				handleAdd={handleAdd}
			/>
			<Title title={"Numbers"} />
			{search === "" ? (
				<Persons data={persons} />
			) : (
				<Persons data={filteredList} />
			)}
		</div>
	);
};

export default App;
