import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/persons'
import Filter from './components/Filter'
import PersonForm from './components/Personform'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')

  const filteredPersons = !search
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      console.log('resolved')
      setPersons(initialPersons)
      console.log('effect')
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.max(...persons.map((n) => 1 + n.id)),
    }
    if (
      persons.map((object) => object.name).indexOf(personObject.name) !== -1
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one`
        )
      ) {
        personService
          .update(
            persons.map((object) => object.name).indexOf(personObject.name) + 1,
            personObject
          )
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !==
                persons
                  .map((object) => object.name)
                  .indexOf(personObject.name) +
                  1
                  ? person
                  : response.data
              )
            )
            setNewName('')
            setNewNumber('')
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
    } else {
      console.log(personObject)
      personService.create(personObject).then((response) => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>Add new person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
