class CohortManager {
  constructor() {
    this.cohorts = []
    this.studentID = 0
  }

  addCohort(name) {
    this.cohorts.push({ name: name })
    return `${name} created`
  }

  searchCohort(name) {
    const findCohort = this.cohorts.find((obj) => obj.name === name)
    return findCohort !== undefined ? `${name} found` : `${name} does not exist`
  }

  addStudent(cohort, forename, surname, username, email) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.name === cohort)
    return cohortIndex !== -1
      ? (this.studentID++,
        (this.cohorts[cohortIndex].students = []),
        this.cohorts[cohortIndex].students.push({
          id: this.studentID,
          forename: forename,
          surname: surname,
          github: username,
          email: email
        }),
        this.cohorts[cohortIndex].students)
      : 'cohort does not exist'
  }
}

module.exports = { CohortManager }
