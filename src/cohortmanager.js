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

  createCohort(cohortname) {
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
}

module.exports = CohortManager
