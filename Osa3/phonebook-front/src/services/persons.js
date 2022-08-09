import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const deletePerson = (id, name) => {
  if (window.confirm('Delete ', `${name}`, '?')) {
    return axios.delete(`${baseUrl}/${id}`)
  }
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  deletePerson: deletePerson,
}
