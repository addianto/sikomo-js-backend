const DEFAULT_NEW_ID = 0
const BASE_10 = 10

const sanitizeId = (id) => {
  switch (typeof id) {
    case 'number':
      return id
    case 'string':
      return parseInt(id, BASE_10)
    case 'undefined':
      return DEFAULT_NEW_ID
    default:
      throw new Error(`Invalid ID: ${id}`)
  }
}

export const Animal = (animal) => {
  const obj = {}

  obj.id = sanitizeId(animal.id)
  obj.name = animal.name || ''
  obj.toJson = () => {
    return {
      id: obj.id,
      name: obj.name
    }
  }

  return obj
}
