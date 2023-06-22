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
    // const existingCohort = this.findCohortByName(cohortName)

    // if (existingCohort) {
    //   console.log('Cohort already exists')
    //   return existingCohort
    // }
    this.cohorts.push(addCohort)
    return addCohort
  }

  findCohortByName(cohortName) {
    const cohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    // console.log(cohortName)
    return cohort || null
  }

  addStudent(studentID, cohortName) {
    const cohort = this.findCohortByName(cohortName)

    if (!cohort) {
      console.log(`Cohort '${cohortName}' does not exist.`)
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
    const studentIndex = cohort.students.findIndex(
      (student) => student.studentID === studentID
    )

    if (studentIndex === -1) {
      throw new Error(
        `Student with ID '${studentID}' does not exist in cohort '${cohortName}'.`
      )
    }
    const removedStudent = cohort.students.splice(studentIndex, 1)[0] // Get the removed student
    return removedStudent
  }

  // return null // Return null if student is not found

  removeCohort(cohortName) {
    const index = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )

    if (index !== -1) {
      return this.cohorts.splice(index, 1)[0] // Get the removed cohort
    }

    return null // Return null if cohort is not found
  }
}

module.exports = CohortManager
