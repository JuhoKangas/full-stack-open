const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <b>Total of {sum} exercises</b>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => (
	<>
		{parts.map((part) => (
			<Part key={part.id} part={part} />
		))}
	</>
);

const Course = ({ course }) => {
	const courseSum = course.parts.reduce((prev, current) => {
		return prev + current.exercises;
	}, 0);

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total sum={courseSum} />
		</div>
	);
};

export default Course