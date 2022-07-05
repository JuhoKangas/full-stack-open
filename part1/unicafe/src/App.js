import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ name }) => <button>{name}</button>;

const Statistics = (props) => {
  const average = (props.good + props.neutral + props.bad) / 3;

  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>average {average}</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="give feedback" />
      <Button name="good" />
      <Button name="neutral" />
      <Button name="bad" />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
