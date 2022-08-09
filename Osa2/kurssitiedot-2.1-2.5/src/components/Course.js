const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]

const Course = () => {
  return (
    <div>
      <ul>
        {courses.map((x) => (
          <div>
            <li key={x.name}>
              <h2> {x.name} </h2>
              {console.log('x =', x.name)}
            </li>
            {x.parts.map((y) => (
              <li key={y.name}>
                {y.name} {y.exercises}
                {console.log('y =', y.name)}
              </li>
            ))}
            <h2>
              {' '}
              Total of{' '}
              {x.parts.reduce(
                (edellinenArvo, NytArvo) => edellinenArvo + NytArvo.exercises,
                0
              )}{' '}
              exercises{' '}
            </h2>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Course
