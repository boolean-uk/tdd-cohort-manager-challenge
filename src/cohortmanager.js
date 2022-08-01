// - Remove student from a specific cohort
// - Return errors if student or cohort not found

class CohortManager {
  constructor () {
    this.cohorts = []
    this.students = []
  }

  // Create a cohort with a cohort name
  createCohort (cohortName) {
    this.cohorts.push(cohortName)
    return cohortName.name
  }

  // Search for cohort by cohort name
  searchCohort (name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (name === this.cohorts[i].name) {
        return this.cohorts[i]
      }
    }
    return "Cohort doesn't exist"
  }

  createStudent (Student) {
    this.students.push(Student)
    return this.students
  }

  // Add student to a specific cohort
  addStudentToCohort (cohortName, student) {
    const cohort = this.searchCohort(cohortName)
    if (cohort) {
      cohort.students.push(student)
      return student
    }
    return false
  }

  // Remove a cohort by a cohort name
  removeCohortName (name) {
    let deletedCohort = []
    for (let i = 0; i < this.cohorts.length; i++) {
      if (name === this.cohorts[i].name) {
        deletedCohort = this.cohorts.splice(i, 1)
        return deletedCohort
      }
    }
    return deletedCohort
  }

  // Remove student from a specific cohort
  removeStudentFromCohort (cohortName, student) {
    let deletedStudent = []
    const foundCohort = this.searchCohort(cohortName)
    if (foundCohort) {
      for (let i = 0; i < foundCohort.students.length; i++) {
        if (foundCohort.students[i].name === student.name) {
          deletedStudent = foundCohort.students.splice(i, 1)
        }
      }
      return deletedStudent
    }
    return false
  }
}

module.exports = CohortManager
