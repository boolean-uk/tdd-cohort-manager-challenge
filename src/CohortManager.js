class CohortManager {
  constructor() {
    this.cohorts = []
    this.studentID = 0
  }

  createCohort(cohortName) {
    const addCohort = {
      cohortName: cohortName,
      students: []
    }
    this.cohorts.push(addCohort)
    return addCohort
  }

  // const existingCohort = this.findCohortByName(cohortName)

  // // if (existingCohort) {
  // //   console.log('Cohort already exists')
  // //   return existingCohort
  // // }

  findCohortByName(cohortName) {
    return this.cohorts.find((cohort) => cohort.cohortName === cohortName)
  }

  addStudent(studentID, cohortName) {
    const cohort = this.findCohortByName(cohortName)

    if (!cohort) {
      throw new Error(`Cohort '${cohortName}' does not exist.`)
    }

    const newStudent = {
      studentID: studentID
    }

    cohort.students.push(newStudent)
    return newStudent
  }

  removeStudent(studentID, cohortName) {
    const cohort = this.findCohortByName(cohortName)

    if (!cohort) {
      throw new Error(`Cohort '${cohortName}' does not exist.`)
    }
    const index = cohort.students.findIndex(
      (student) => student.studentID === studentID
    )

    if (index !== -1) {
      const removedStudent = cohort.students.splice(index, 1)[0] // Get the removed student
      return removedStudent
    }

    return null // Return null if student is not found
  }
}

module.exports = CohortManager
