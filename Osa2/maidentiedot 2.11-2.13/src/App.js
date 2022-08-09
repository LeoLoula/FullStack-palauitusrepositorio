import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setNewSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])
  console.log('rendered', countries.length, 'countries')

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  function showCountry(parameter, e) {
    e.preventDefault()
    console.log('näytä')
    setNewSearch(parameter)
  }

  const filtered = !search
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Countries filtered={filtered} showCountry={showCountry} />
    </div>
  )
}

const Filter = (props) => {
  return (
    <div>
      Find countries:
      <input
        type="text"
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </div>
  )
}

const Languages = (props) => {
  return (
    <div>
      {props.filtered.map((country) => (
        <p key={Object.values(country.languages)}>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </p>
      ))}
    </div>
  )
}

const Flag = (props) => {
  return (
    <div>
      {props.filtered.map((country) => (
        <p key={Object.values(country.flags)}>
          <img src={Object.values(country.flags)[0]} alt="FLAG" />
        </p>
      ))}
    </div>
  )
}

const Countries = (props) => {
  if (props.filtered.length <= 10) {
    if (props.filtered.length !== 1) {
      return (
        <div>
          {props.filtered.map((country) => (
            <form
              onSubmit={(e) => props.showCountry(country.name.common, e)}
              key={country.name.common}
            >
              {country.name.common}
              <button type="submit">show</button>
            </form>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <h1>
            {props.filtered.map((country) => (
              <p key={country.name.common}>{country.name.common}</p>
            ))}
          </h1>
          <div>
            <p>Capital {props.filtered[0].capital[0]}</p>
            <p>Area {props.filtered[0].area}</p>
          </div>
          <div>
            <h3>Languages:</h3>
          </div>
          <Languages filtered={props.filtered} />
          <div>
            <h3>Flag:</h3>
          </div>
          <Flag filtered={props.filtered} />
          <div>
            <h2>Weather in {props.filtered[0].capital[0]}</h2>
            <p>Temperature: </p>
          </div>
        </div>
      )
    }
  } else {
    return <p>Too many matches, specify another filter</p>
  }
}
export default App
