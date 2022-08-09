import './App.css'
import React from 'react'
import Course from './components/Course'
import courses from './components/Course'

const App = () => {
  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
