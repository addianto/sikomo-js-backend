export const helloService = {
  sayHello: (name) => {
    if (!name) {
      return 'Hello, Anonymous'
    }

    return `Hello, ${name}`
  }
}
