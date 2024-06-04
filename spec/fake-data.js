const Student = require('../src/Student')
const { faker } = require('@faker-js/faker')

const studentGenerator = (count) =>
  Array.from(
    Array(count),
    () =>
      new Student(
        faker.person.firstName(),
        faker.person.lastName(),
        'github/' + faker.person.firstName(),
        'asd'
      )
  )
module.exports = { studentGenerator }
