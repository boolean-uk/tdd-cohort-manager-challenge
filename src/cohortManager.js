const Student = require('../src/student.js')
const accountSid = 'AC7c58fb9d8b144232bb704c036836aa4c'
const authToken = '43165cf4c8b4a0d14ca83eeb45fa9f4f'
const client = require('twilio')(accountSid, authToken)

class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  addCohort(name) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === name
    )
    if (existingCohort) {
      throw new Error('The cohort name is already in use! Please pick another')
    }
    this.id++
    const cohort = {
      id: this.id,
      cohortName: name,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  searchByCohortName(cohortName) {
    const item = this.cohorts.find((item) => item.cohortName === cohortName)
    if (item === undefined) throw new Error('Cohort was not found')
    return item
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    const cohortToSearch = this.searchByCohortName(cohortName)
    let studentFound = null
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const student = students.find(
        (student) => student.githubUsername === githubUsername
      )
      if (student) {
        studentFound = student
        break
      }
    }
    if (studentFound) {
      throw new Error('The student already exists in another cohort')
    }
    if (cohortToSearch.students.length < 24) {
      const student = new Student(firstName, lastName, githubUsername, email)
      cohortToSearch.students.push(student)
      this.sendReceiptViaSMSAdd(firstName, lastName)
      return cohortToSearch
    }
    throw new Error('Cohort capacity exceeded: cannot add more students')
  }

  removeCohort(cohort) {
    const cohortToDelete = this.searchByCohortName(cohort).cohortName
    if (cohortToDelete) {
      this.cohorts = this.cohorts.filter(
        (item) => item.cohortName !== cohortToDelete
      )
    }
    return this.cohorts
  }

  removeStudent(githubUsername) {
    let studentFound = false
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const index = students.findIndex(
        (student) => student.githubUsername === githubUsername
      )
      if (index !== -1) {
        students.splice(index, 1)
        studentFound = true
        this.sendReceiptViaSMSRemove(githubUsername)
        break
      }
    }
    if (!studentFound) {
      throw new Error('Student was not found')
    }
    return this.cohorts
  }

  getStudentId(cohortName, firstName, lastName) {
    const cohortToSearch = this.searchByCohortName(cohortName)
    const student = cohortToSearch.students.find(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    )
    if (!student) {
      throw new Error('Student was not found')
    }
    return student.studentID
  }

  searchByStudentId(studentID) {
    let studentFound = null
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const student = students.find(
        (student) => student.studentID === studentID
      )
      if (student) {
        studentFound = student
        break
      }
    }
    if (!studentFound) {
      throw new Error('Student was not found')
    }
    return true
  }

  searchByFullname(fullname) {
    const [firstName, lastName] = fullname.split(' ')
    const studentsFound = []
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const matchingStudents = students.filter(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )
      studentsFound.push(...matchingStudents)
    }
    if (studentsFound.length === 0) {
      throw new Error('No students with that name exist')
    }
    return true
  }

  sendReceiptViaSMSAdd(firstName, lastName) {
    const message = `Hey there, ${firstName} ${lastName} was added successfuly`

    return client.messages
      .create({
        body: message,
        from: '+12178338475',
        to: '+351912121304'
      })
      .then((message) => console.log(message.sid))
      .done()
  }

  sendReceiptViaSMSRemove(githubUsername) {
    const message = `Hey there, the user with the GitHub username "${githubUsername}" was deleted successfully.`

    return client.messages
      .create({
        body: message,
        from: '+12178338475',
        to: '+351912121304'
      })
      .then((message) => console.log(message.sid))
      .done()
  }
}

// const test = new CohortManager()
// test.addCohort('cohort10')
// test.addStudent('cohort10', 'carolina', 'arruda', 'git')
// test.removeStudent('git')

module.exports = CohortManager
