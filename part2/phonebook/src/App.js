import { useState } from "react";

const Person = ({ name, number }) => {
	return (
		<div>
			{name} {number}
		</div>
	);
};

const Title = ({ title }) => <h2>{title}</h2>;

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [filteredList, setFilteredList] = useState(persons);

	const handleAdd = (e) => {
		e.preventDefault();

		const checkName = (obj) => obj.name === newName;

		if (persons.some(checkName)) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			const newPerson = { name: newName, number: newNumber };
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
			<div>
				filter shown with:{" "}
				<input type="text" value={search} onChange={handleSearch} />
			</div>
			<Title title={"add a new"} />
			<form>
				<div>
					name: <input value={newName} onChange={handleNameInput} />
				</div>
				<div>
					number:{" "}
					<input value={newNumber} onChange={handleNumberInput} />
				</div>
				<div>
					<button onClick={handleAdd} type="submit">
						add
					</button>
				</div>
			</form>
			<Title title={"Numbers"} />
			{filteredList.map((person) => (
				<Person
					key={person.id}
					name={person.name}
					number={person.number}
				/>
			))}
		</div>
	);
};

export default App;
