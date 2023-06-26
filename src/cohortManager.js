class CohortManager {
  constructor() {
    this.cohorts = []
    this.studentID = 0
  }

  addCohort(cohort) {
    return cohort
      ? this.cohorts.findIndex((obj) => obj.cohort === cohort) === -1
        ? (this.cohorts.push({ cohort: cohort }), `${cohort} created`)
        : `${cohort} already exists`
      : 'No cohort name specified'
  }

  searchCohort(cohort) {
    const findCohort = this.cohorts.some((obj) => obj.cohort === cohort)
    return findCohort ? `${cohort} found` : `${cohort} does not exist`
  }

  addStudent(cohort, forename, surname, username, email) {
    const studentCheck = this.cohorts.findIndex(
      (cohort) =>
        cohort.students &&
        cohort.students.some(
          (student) =>
            student.forename === forename &&
            student.surname === surname &&
            student.github === username &&
            student.email === email
        )
    )

    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)

    return studentCheck !== -1
      ? `${forename} ${surname} is already in ${this.cohorts[studentCheck].cohort}`
      : cohortIndex !== -1
      ? typeof this.cohorts[cohortIndex].students === 'undefined' ||
        this.cohorts[cohortIndex].students.length < 24
        ? (this.studentID++,
          (this.cohorts[cohortIndex].students =
            typeof this.cohorts[cohortIndex].students === 'undefined'
              ? []
              : this.cohorts[cohortIndex].students),
          this.cohorts[cohortIndex].students.push({
            id: this.studentID,
            forename: forename,
            surname: surname,
            github: username,
            email: email
          }),
          this.cohorts[cohortIndex].students)
        : `Maximum number of students reached for ${cohort}`
      : `${cohort} does not exist`
  }

  searchStudent(id) {
    const cohortIndex = this.cohorts.findIndex(
      (cohort) =>
        cohort.students.findIndex((student) => student.id === id) !== -1
    )
    const studentIndex =
      cohortIndex !== -1
        ? this.cohorts[cohortIndex].students.findIndex(
            (student) => student.id === id
          )
        : -1
    return studentIndex !== -1
      ? this.cohorts[cohortIndex].students[studentIndex]
      : `No student found for id ${id}`
  }

  removeCohort(cohort) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)
    return cohortIndex !== -1
      ? (this.cohorts.splice(cohortIndex, 1), `${cohort} removed`)
      : `${cohort} does not exist`
  }

  removeStudent(cohort, name) {
    const cohortIndex = this.cohorts.findIndex((obj) => obj.cohort === cohort)
    const studentIndex =
      cohortIndex !== -1
        ? this.cohorts[cohortIndex].students.findIndex(
            (student) => `${student.forename} ${student.surname}` === name
          )
        : -1

    return cohortIndex !== -1
      ? studentIndex !== -1
        ? (this.cohorts[cohortIndex].students.splice[(studentIndex, 1)],
          `${name} removed from ${cohort}`)
        : `${name} is not a student of ${cohort}`
      : `${cohort} does not exist`
  }
}

module.exports = { CohortManager }
