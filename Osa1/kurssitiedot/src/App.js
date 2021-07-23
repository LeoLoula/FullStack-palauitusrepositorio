import React from 'react'

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

  ///Accessing an Array item using the index position///

  let part1  = course.parts[0]
  let part2 = course.parts[1]
  let part3 = course.parts[2]

  console.log(part1)
  return (
    <div>
      <Header course={course.name} />

      <Content  part1 = {part1.name} exercises1 = {part1.exercises}/>
      <Content  part2 = {part2.name} exercises2 = {part2.exercises}/>
      <Content  part3 = {part3.name} exercises3 = {part3.exercises}/>
      
      <Total  määrä = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
      Course name: {props.course}
      </h2>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Number of exercises: {props.määrä} 
      </p>
    </div>
  )
}


const Content = (props) =>  {
  console.log(props)
  return (
    <div>
      <Part part = {props.part1} määrä = {props.exercises1}/>
      <Part part = {props.part2} määrä = {props.exercises2}/>
      <Part part = {props.part3} määrä = {props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p> {props.part} {props.määrä}</p>
    </div>
    
  )
}




export default App