const Student = require('../src/Student.js')
const Cohort = require('../src/Cohort.js')

class Cohortmanager {
  constructor(name) {
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

  addtoCohort(firstName, name) {
    const studentToAdd = this.students.find((e) => e.firstName === firstName)
    const chosenCohort = this.cohortList.find((e) => e.name === name)

    if (studentToAdd === undefined || chosenCohort === undefined) {
      return 'this student / Cohort does not exist in this cohort'
    } else {
      chosenCohort.studentList.push(studentToAdd)
    }
  }

  removeCohort(name) {
    const findCohort = this.cohortList.find((e) => e.name === name)

    if (findCohort === undefined) {
      return 'This cohort does not exist'
    } else {
      const index = this.cohortList.indexOf(findCohort)
      this.cohortList.splice(index, 1)
    }
  }

  removeStudent(firstName) {
    const findStudent = this.students.find((e) => e.name === firstName)
    if (findStudent === undefined) {
      return 'this student does not exist in this cohort'
    } else {
      const index = this.cohortList.indexOf(findStudent)
      this.students.splice(index, 1)
    }
  }
}

// Tests start here

// console.log tests below

// const aNewCohort = new Cohortmanager('cohort 1')
// const secondCohort = new Cohortmanager('cohort 2')
// const thirdReoveCohort = new Cohortmanager('cohort 3')

// // thirdReoveCohort.removeCohort('cohort 3')

// aNewCohort.createCohort('cohort 1')
// secondCohort.createCohort('cohort 2')
// thirdReoveCohort.createCohort('cohort 3')

// thirdReoveCohort.removeCohort('cohort 3')

// console.log('first cohort', aNewCohort)
// console.log('Second cohort : ', secondCohort)
// console.log('3rd cohort : ', thirdReoveCohort)

// const notFound = aNewCohort.searchCohort('cohort 2')
// const studentTest = aNewCohort.addStudent(
//   1,
//   'James',
//   'Byrne',
//   'Jamesgithub',
//   'james@james.com'
// )
// const secondStudent = secondCohort.addStudent(
//   2,
//   'Luna',
//   'Ballona',
//   'LunaTheCat@github',
//   'luna@meow.com'
// )

// const studentsView = aNewCohort.students
// const studentView2 = secondCohort.students

// const removeStudentTest = secondCohort.addtoCohort('Luna', 'cohort 2')
// const studentListCohor2 = secondCohort.studentList

// // console.log('This is the list ', aNewCohort.cohortList)
// // console.log('is it found ?: ', notFound)
// // console.log('student List is', studentsView)
// console.log('Second student ', studentView2)
// console.log(studentListCohor2)

// const studentOne = new Student(1, 'james', 'byrne', 'github', 'james@james.com')
// console.log(studentOne)

// const newCohort = new Cohort('cohort1')
// console.log(newCohort)

// Tests end here

module.export = Cohortmanager
