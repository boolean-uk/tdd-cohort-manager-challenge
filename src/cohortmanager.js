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
}

module.exports = CohortManager
