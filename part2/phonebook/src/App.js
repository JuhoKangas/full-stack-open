import { useState, useEffect } from "react";
import personServices from "./services/persons";

const Person = ({ name, number, handleDelete }) => {
	return (
		<div>
			{name} {number} <button onClick={handleDelete}>delete</button>
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

const Persons = ({ data, handleDelete }) => {
	return data.map((person) => (
		<Person
			handleDelete={() => handleDelete(person.id, person.name)}
			key={person.id}
			name={person.name}
			number={person.number}
		/>
	));
};

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		personServices
			.getAll()
			.then((returnedData) => setPersons(returnedData));
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
			};
			personServices.create(newPerson).then((addedPerson) => {
				console.log(addedPerson);
				setPersons(persons.concat(addedPerson));
				setNewName("");
				setNewNumber("");
			});
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

	const handleDeleteOf = (id, name) => {
		if (window.confirm(`Delete ${name}?`)) {
			personServices
				.deletePerson(id)
				.then((res) => {
					setPersons(persons.filter((p) => p.id !== id));
				})
				.catch((error) => {
					console.log("Person was already deleted");
					setPersons(persons.filter((p) => p.id !== id));
				});
		}
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
				<Persons handleDelete={handleDeleteOf} data={persons} />
			) : (
				<Persons handleDelete={handleDeleteOf} data={filteredList} />
			)}
		</div>
	);
};

export default App;
