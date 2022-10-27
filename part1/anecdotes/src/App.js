import React from "react";
import { useState } from "react";

const Button = ({ title, handleClick }) => {
	return (
		<div>
			<button onClick={handleClick}>{title}</button>
		</div>
	);
};

const Title = (props) => <h1>{props.text}</h1>;

const Votes = (props) => <div>has {props.pointsAmount} votes</div>;

const Anecdote = (props) => <p>{props.anecdote}</p>;

const App = () => {
	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });

	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	];

	const updatePoints = (anecdote) => {
		let newPoints = { ...points };
		newPoints[anecdote] += 1;
		setPoints({
			...newPoints,
		});
		console.log(points);
	};

	const randomNum = () => Math.floor(Math.random() * anecdotes.length);

	const getHighestVoted = () => {
		let pointsArr = Object.values(points);
		return pointsArr.indexOf(Math.max(...pointsArr));
	};

	console.log(getHighestVoted());

	return (
		<div>
			<Title text="Anecdote of the day" />
			<Anecdote anecdote={anecdotes[selected]} />
			<Votes pointsAmount={points[selected]} />
			<Button title="vote" handleClick={() => updatePoints(selected)} />
			<Button title="next anecdote" handleClick={() => setSelected(randomNum())} />
			<Title text="Anecdote with most Votes" />
			<Anecdote anecdote={anecdotes[getHighestVoted()]} />
			<Votes pointsAmount={points[getHighestVoted()]} />
		</div>
	);
};

export default App;
