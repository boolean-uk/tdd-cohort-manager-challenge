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

  removeCohortByName(cohortName) {
    const indexToRemove = this.cohortList.findIndex(
      (cohort) => cohort.name === cohortName
    )

    if (indexToRemove !== -1) {
      this.cohortList.splice(indexToRemove, 1)
    } else {
      console.error(`Cohort '${cohortName}' not found.`)
    }
  }

  removeStudentFromCohort(studentID, cohortName) {
    const cohort = this.searchCohortByName(cohortName)

    if (cohort) {
      const indexToRemove = this.studentList.findIndex(
        (student) =>
          student.studentID === studentID &&
          student.cohortID === cohort.cohortID
      )

      if (indexToRemove !== -1) {
        this.studentList.splice(indexToRemove, 1)
      } else {
        console.error(
          `Student with ID '${studentID}' not found in cohort '${cohortName}'.`
        )
      }
    } else {
      console.error(`Cohort '${cohortName}' not found.`)
    }
  }
}

export default Cohort
