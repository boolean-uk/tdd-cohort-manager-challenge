class Cohort {
  constructor() {
    this.cohortList = []
    this.studentList = []
  }

  createCohort(cohortName) {
    const newCohort = { cohortID: this.cohortList.length + 1, name: cohortName }
    this.cohortList.push(newCohort)
  }

  searchCohortByName(name) {
    const foundCohort = this.cohortList.find((cohort) => cohort.name === name)
    return foundCohort || null
  }

  addStudentToCohort(student, cohortName) {
    const cohort = this.searchCohortByName(cohortName)

    if (cohort) {
      const studentToAdd = { ...student, cohortID: cohort.cohortID }
      this.studentList.push(studentToAdd)
    } else {
      console.error(`Cohort '${cohortName}' not found.`)
    }
  }
}

export default Cohort
