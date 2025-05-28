const Header = (props) => {
  return <h1>The name of the course is {props.title}</h1>
}

const Part = (props) => {
  return (
    <h2>
      This course name is {props.name} And it has {props.exercises} exercises
    </h2>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}
  
const Total = (props) => {
  return (
    <h1>
      The total number of exercises is {props.exercises1 + props.exercises2 + props.exercises3}
    </h1>
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
    <div>
      <Header title={course.name}/>
      <h1>
        {course.parts[0].name} has {course.parts[0].exercises} exercises,
        {course.parts[1].name} has {course.parts[1].exercises} exercises, and
        {course.parts[2].name} has {course.parts[2].exercises} exercises.
      </h1>
      <Total exercises1={course.parts[0].exercises}
             exercises2={course.parts[1].exercises}
             exercises3={course.parts[2].exercises} />
    </div>
  )
}

export default App