class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = {
      name: name, // Can also be written as name,
      students: []
    }
    // if (this.cohortList.cohortName !== newCohort.cohortName) {
    this.cohorts.push(newCohort)
    return newCohort
  }
  // else {
  //   return 'This cohort already exists!'
  // }

  // Returns the idex/position of the cohort requested by 'name'
  findCohort(name) {
    const result = this.cohorts.findIndex((cohort) => {
      return cohort.name === name
    })

    if (result < 0) {
      throw new Error('Cohort not found!')
    }

    return result
  }

  addStudent(student, cohortName) {
    const index = this.findCohort(cohortName)
    this.cohorts[index].students.push(student)
  }

  // removeCohort() {

  // }
}

module.exports = CohortManager
