const Student = require('../src/Student.js')
const Cohort = require('../src/Cohort.js')

class Cohortmanager {
  constructor(name, Id) {
    this.Id = Id
    this.name = name
    this.cohortList = []
    this.students = []
  }

  createCohort(name) {
    const validName = /^[A-Za-z0-9 ]*$/
    if (name === '') {
      return 'this name is not valid'
    }
    if (validName.test(name)) {
      const newCohort = new Cohort(name)

      this.cohortList.push(newCohort)
    }
  }

  searchCohort(name) {
    const found = this.cohortList.find((e) => e.name === name)

    if (found === undefined) {
      return 'This cohort does not exist'
    } else {
      return `${found.name} is found`
    }
  }

  addStudent(Id, firstName, lastNames, github, email) {
    const newStudent = new Student(Id, firstName, lastNames, github, email)
    this.students.push(newStudent)
  }
}

const aNewCohort = new Cohortmanager('cohort 1')
console.log(aNewCohort)

aNewCohort.createCohort('cohort 1')
const notFound = aNewCohort.searchCohort('cohort 1')
const studentTest = aNewCohort.addStudent(
  1,
  'James',
  'Byrne',
  'Jamesgithub',
  'james@james.com'
)

const studentsView = aNewCohort.students
console.log('This is the list ', aNewCohort.cohortList)
console.log('is it found ?: ', notFound)
console.log('student List', studentsView)
console.log('my studentTest code test ', studentTest)

module.export = Cohortmanager

// const studentOne = new Student(1, 'james', 'byrne', 'github', 'james@james.com')
// console.log(studentOne)

// const newCohort = new Cohort('cohort1')
// console.log(newCohort)
