class CohortManager {
  constructor() {
    this.cohorts = []
    this.studentID = 0
  }

  addCohort(cohort) {
    const cohortCheck = this.cohorts.find((obj) => obj.cohort === cohort)
    return cohortCheck !== -1
      ? (this.cohorts.push({ cohort: cohort }), `${cohort} created`)
      : `${cohort} already exists`
  }

  searchCohort(cohort) {
    const findCohort = this.cohorts.find((obj) => obj.cohort === cohort)
    return findCohort !== undefined
      ? `${cohort} found`
      : `${cohort} does not exist`
  }

  addStudent(cohort, forename, surname, username, email) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)
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

  removeCohort(cohort) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)
    return cohortIndex !== -1
      ? (this.cohorts.splice(cohortIndex, 1), `${cohort} removed`)
      : `${cohort} does not exist`
  }

  removeStudent(cohort, name) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)
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
