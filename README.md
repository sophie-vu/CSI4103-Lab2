# CSI4103-Lab2

| Contact      | Information |
| ----------- | ----------- |
| ID      | 300113938       |
| Email   | svu043@uottawa        |


* Complete exercises 1.3 - 1.5: https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5 (optional, time permitting)

* 1.3

```
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

```

![image](https://user-images.githubusercontent.com/71732942/213956718-b91aa8a9-ac70-4bae-922b-7c822a0084b0.png)


* 1.4
```
const Header = (props) => {
  return (
    <div>
      <h1>{props.course} </h1>
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
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <>
      <Header course={course}/>
      <Content name={parts[0].name} />
      <Total exercises={parts[0].exercises}/>
      <Content name={parts[1].name} />
      <Total exercises={parts[1].exercises}/>
      <Content name={parts[2].name} />
      <Total exercises={parts[2].exercises}/>
    </>
  )
}

export default App
```
![image](https://user-images.githubusercontent.com/71732942/213957303-0a815c92-5cad-437c-93be-8b3ec23a0b77.png)

* 1.5
```
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
```
![image](https://user-images.githubusercontent.com/71732942/213957462-fd659424-98d7-44d9-982e-0ea65bf14c4c.png)




*
