class Cohort {
  constructor(cohortName, students = []) {
    this.cohortName = cohortName
    this.students = students
  }

  newCohort() {
    return { cohortName: this.cohortName, students: this.students }
  }
}

module.exports = Cohort
