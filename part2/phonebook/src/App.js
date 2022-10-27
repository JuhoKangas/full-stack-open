import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleAdd = (e) => {
		e.preventDefault();
		const newPerson = { name: newName };
		setPersons(persons.concat(newPerson));
		setNewName("");
	};

	const handleNameInput = (e) => {
		setNewName(e.target.value);
	};

	const Person = ({ name }) => {
		return <div>{name}</div>;
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleNameInput} />
				</div>
				<div>
					<button onClick={handleAdd} type="submit">
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<Person key={person.name} name={person.name} />
			))}
		</div>
	);
};

export default App;
