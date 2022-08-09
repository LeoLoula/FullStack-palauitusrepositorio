import React from 'react'

const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      Search persons:
      <input type="text" value={search} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter
