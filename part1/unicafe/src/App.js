import React, { useState } from "react";

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const Button = ({ name, handleClick }) => {
  const style = {
    display: "inline-block",
  };

  return (
    <div style={style}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

const StatisticLine = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  const average = (stats.good - stats.bad) / stats.all;
  const positive = (stats.good / stats.all) * 100;

  if (stats.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <StatisticLine name="good" value={stats.good} />
      <StatisticLine name="neutral" value={stats.neutral} />
      <StatisticLine name="bad" value={stats.bad} />
      <StatisticLine name="all" value={stats.all} />
      <StatisticLine name="average" value={average} />
      <StatisticLine name="positive" value={positive + " %"} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statistics = {
    good,
    neutral,
    bad,
    all: good + neutral + bad,
  };

  return (
    <div>
      <Header name="give feedback" />
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Header name="statistics" />
      <Statistics stats={statistics} />
    </div>
  );
};

export default App;
