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
      : `${cohort} does not exist`
  }

  removeCohort(name) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.name === name)
    return cohortIndex !== -1
      ? (this.cohorts.splice(cohortIndex, 1), `${name} removed`)
      : `${name} does not exist`
  }

  removeStudent(cohort, name) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.name === cohort)
    let studentIndex
    cohortIndex !== -1
      ? (studentIndex = this.cohorts[cohortIndex].students.findIndex(
          (student) => `${student.forename} ${student.surname}` === name
        ))
      : (studentIndex = -1)

    return cohortIndex !== -1
      ? studentIndex !== -1
        ? (this.cohorts[cohortIndex].students.splice[(studentIndex, 1)],
          `${name} removed from ${cohort}`)
        : `${name} is not a student of ${cohort}`
      : `${cohort} does not exist`
  }
}

module.exports = { CohortManager }
