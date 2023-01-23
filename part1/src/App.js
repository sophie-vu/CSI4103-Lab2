
const Part = (props) => {
  return (
    <div>
      <p>Part name: {props.name} </p>
      <p>Number of exercises: {props.exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'Staet of a component',
    exercises: 14
  }
  
  return (
    <>
      <h1>{course.toString()}</h1>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  )
}

export default App