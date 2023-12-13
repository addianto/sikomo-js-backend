const sayHello = (name) => {
  if (!name) {
    return 'Hello, Anonymous'
  }

  return `Hello, ${name}`
}

module.exports = {
  sayHello
}
