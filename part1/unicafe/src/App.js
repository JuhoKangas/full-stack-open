import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ name, handleClick }) => <button onClick={handleClick}>{name}</button>;

const StatisticsLine = ({ title, value }) => {
	return (
		<>
			<tr>
				<td>{title}</td>
				<td>{value}</td>
			</tr>
		</>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const sum = good + neutral + bad;
	const average = (good - bad) / sum;
	const positive = (good / sum) * 100 + " %";

	if (sum > 0) {
		return (
			<>
				<table>
					<tbody>
						<StatisticsLine title="good" value={good} />
						<StatisticsLine title="neutral" value={neutral} />
						<StatisticsLine title="bad" value={bad} />
						<StatisticsLine title="all" value={sum} />
						<StatisticsLine title="average" value={average} />
						<StatisticsLine title="positive" value={positive} />
					</tbody>
				</table>
			</>
		);
	} else {
		return <p>No feedbacks given</p>;
	}
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Header title="give feedback" />
			<Button handleClick={() => setGood(good + 1)} name="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
			<Button handleClick={() => setBad(bad + 1)} name="bad" />
			<Header title="statistics" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
