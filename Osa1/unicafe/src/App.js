import React, { useState } from 'react'

const StatisticLine =({text,value, text1}) => {
  return(
  <React.Fragment>
     {text} {value} {text1}
  </React.Fragment>
    

  )
} 

const Statistics =(props) => {
let huono = -1
let hyvä = 1
let neutraali = 0


  return (
    
    
   
    <div>
      <h1>Statistics</h1>
        
        
        <table>
        <thead>
          <tr>
            <td> <StatisticLine text="Good"/> </td> 
            <td> <StatisticLine value={props.good1} /> </td>
          </tr>

          <tr>
            <td> <StatisticLine text="Neutral"/> </td>
            <td> <StatisticLine value={props.neutral1} /> </td>
          </tr>

          <tr>
            <td> <StatisticLine text="Bad" /> </td>
            <td> <StatisticLine value={props.bad1} /> </td>
          </tr>

          <tr>
            <td> <StatisticLine text="All"/> </td>
            <td> <StatisticLine value={props.All1}/> </td>
          </tr>

          <tr>
            <td> <StatisticLine text="Average" /> </td>
            <td> <StatisticLine value={(props.good1*hyvä + props.bad1*huono + props.neutral1* neutraali )/props.All1} /></td>
          </tr>

          <tr>
            <td> <StatisticLine text="Positive"/> </td>
            <td> <StatisticLine value={props.pos1} /></td>
          </tr>
          </thead>
        </table>
      </div>
   
    
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] =useState([])
  const All = good+ neutral + bad
  const pos = (good/All)*100
  
  const handleGoodClick = () => {
    setAll(allClicks+1)
    setGood(good+1)  
  }
  const handleNeutralClick = () => {
    setAll(allClicks+1)
    setNeutral(neutral+1)  
  }

  const handleBadClick = () => {
    setAll(allClicks+1)
    setBad(bad+1)
  }

  const Palaute = (props) => {
    if (props.allClicks.length === 0) {
      return (
      <div>
        <h1>Statistic</h1>
        <p> No feedback given.</p>
      </div>
        
      
     
      )
    } else {
      return(
        
          <Statistics good1 = {good} neutral1= {neutral} bad1= {bad}  All1 = {All} pos1={pos}/>
         
      )
    }
  }

  return (
    
    <div>
       <h1>
        UniCafe feedback
      </h1>
      <Button handleClick= {(handleGoodClick)} text= 'Good' />
      <Button handleClick= {handleNeutralClick} text= 'Neutral' />
      <Button handleClick= {handleBadClick} text= 'Bad' />
      <Palaute allClicks = {allClicks} />
    </div>
     
  ) 
  
    
}

export default App

