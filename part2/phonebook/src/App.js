import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const Person = ({ name, number }) => {
		return (
			<div>
				{name} {number}
			</div>
		);
	};

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

	return (
		<div>
			<h2>Phonebook</h2>
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
			<h2>Numbers</h2>
			{persons.map((person) => (
				<Person
					key={person.name}
					name={person.name}
					number={person.number}
				/>
			))}
		</div>
	);
};

export default App;
