import React from 'react'
import personService from '../services/persons'

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <form
          onSubmit={(e) => personService.deletePerson(person.id, person.name)}
          key={person.number}
        >
          <p>
            {person.name} {person.number}
            <button type="submit">Delete</button>
          </p>
        </form>
      ))}
    </div>
  )
}

export default Persons
