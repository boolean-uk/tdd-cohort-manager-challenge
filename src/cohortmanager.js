const cohortNotFoundError = 'Cohort not found.'
const cohortFullError = 'This cohort is full.'
const cohortCannotExistWithoutNameError = 'Cohort cannot exist without a name!'
const cohortAlreadyExistsError = 'This cohort already exists.'
const studentNotFoundError = 'Student not found.'
const studentInAnotherCohortError = 'This student is already in another cohort.'

class CohortManager {
  constructor() {
    this.studentList = []
    this.schoolCohorts = []
    this.cohortCapacity = 24
  }

  createStudent(student) {
    this.studentList.push(student)
  }

  createNStudents(num, student) {
    for (let i = 0; i < num; i++) {
      this.studentList.push(student)
    }
  }

  createCohort(cohortName) {
    const exists = this.checkIfCohortExists(cohortName)
    if (cohortName === undefined) {
      return cohortCannotExistWithoutNameError
    } else if (exists) {
      return cohortAlreadyExistsError
    }
    const cohort = {
      name: cohortName,
      students: [],
      cohortCapacity: this.cohortCapacity
    }
    this.schoolCohorts.push(cohort)
    return cohort
  }

  checkIfCohortExists(cohortName) {
    if (this.searchCohort(cohortName) !== cohortNotFoundError) {
      return true
    }
    return false
  }

  removeCohort(cohortName) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      const cohort = this.schoolCohorts[i]
      if (cohort.name === cohortName) {
        this.schoolCohorts.splice(i, 1)
        return
      }
    }
    return cohortNotFoundError
  }

  checkIfStudentAlreadyInCohort(studentFirstName, studentLastName) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      for (const element of this.schoolCohorts[i].students) {
        if (
          element.studentFirstName === studentFirstName &&
          element.studentLastName === studentLastName
        ) {
          return true
        }
      }
    }
    return false
  }

  addStudentToCohort(studentFirstName, studentLastName, cohortName) {
    const cohort = this.searchCohort(cohortName)
    const studentAlreadyInCohort = this.checkIfStudentAlreadyInCohort(
      studentFirstName,
      studentLastName
    )
    if (studentAlreadyInCohort) {
      return studentInAnotherCohortError
    }
    if (typeof cohort === 'string') {
      return cohortNotFoundError
    }
    for (let i = 0; i < this.studentList.length; i++) {
      const cohortStudent = this.studentList[i]
      if (
        cohortStudent.studentFirstName === studentFirstName &&
        cohort.students.length < this.cohortCapacity
      ) {
        cohort.students.push(cohortStudent)
        return cohortFullError
      }
    }
    return studentNotFoundError
  }

  removeStudentFromCohort(studentId, cohortName) {
    const cohort = this.searchCohort(cohortName)
    if (typeof cohort === 'string') {
      return cohortNotFoundError
    }
    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].studentID === studentId) {
        cohort.students.splice(i, 1)
        return
      }
    }
    return studentNotFoundError
  }

  searchStudent(id) {
    for (let i = 0; i < this.studentList.length; i++) {
      const student = this.studentList[i]
      if (student.studentID === id) {
        return student
      }
    }
    return studentNotFoundError
  }

  searchStudentByName(firstName, lastName) {
    const studentArray = []
    for (let i = 0; i < this.studentList.length; i++) {
      const student = this.studentList[i]
      if (
        student.studentFirstName === firstName &&
        student.studentLastName === lastName
      ) {
        studentArray.push(student)
      }
    }
    return studentArray
  }

  searchCohort(cohortName) {
    const found = this.schoolCohorts.find((c) => c.name === cohortName)
    if (found) {
      return found
    }
    return cohortNotFoundError
  }

  getAllCohorts() {
    return this.schoolCohorts
  }

  getStudentList() {
    return this.studentList
  }

  //
}

module.exports = CohortManager
