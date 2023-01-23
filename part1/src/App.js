const Header = (props) => {
  return (
    <div>
      <h1>{props.name} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.name} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course={course.name}/>
      <Content name={course.parts[0].name} />
      <Total exercises={course.parts[0].exercises}/>
      <Content name={course.parts[1].name} />
      <Total exercises={course.parts[1].exercises}/>
      <Content name={course.parts[2].name} />
      <Total exercises={course.parts[2].exercises}/>
    </>
  )
}

export default App