const Student = require('./student.js')
const StudentNotFoundError = 'ERROR: Student not found'
const StudentCantBeRemoved = 'Non-existent: Student Cannot be removed'
const MaxCapacity = 'Limit exceeded at 24'
const CantExistInMultiple = 'Student cannot exist in multiple cohorts'
const Twilio = require('./send_sms')

class Cohort {
  constructor (cName) {
    this.studentList = []
    this.cName = cName
    this.capacity = 24
  }

  createList () {
    return this.studentList
  }

  addStudent (id, firstName, lastName, githubUser, email) {
    const newStudent = new Student(id, firstName, lastName, githubUser, email)
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].studentID === id) {
        return CantExistInMultiple
      }
    }
    this.studentList.push(newStudent)
    Twilio(`${firstName} ${lastName} Has been added`)
    return this.studentList
  }

  removeStudent (id) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].studentID === id) {
        this.studentList.splice(i, 1)
        return this.studentList
      }
    }
    return StudentCantBeRemoved
  }

  searchStudent (id) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (id === this.studentList[i].studentID) {
        return this.studentList[i]
      }
    }
    return StudentNotFoundError
  }

  fixedCapacity () {
    if (this.studentList.length === this.capacity) {
      return MaxCapacity
    }
  }

  searchStudentby (first, last) {
    const newList = []
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].firstName === first && this.studentList[i].lastName === last) {
        newList.push(this.studentList[i])
      }
    }
    return newList
  }
}

module.exports = Cohort
