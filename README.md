# CSI4103-Lab2

| Contact      | Information |
| ----------- | ----------- |
| ID      | 300113938       |
| Email   | svu043@uottawa        |


* Complete exercises 1.3 - 1.5: https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5 (optional, time permitting)

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
