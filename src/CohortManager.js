export default class CohortManager {
  constructor() {
    this.cohorts = []
    this.idCount = 0
  }

  addCohort(cohortName) {
    if (!cohortName) throw new Error('Cohort name is required')
    if (this.cohorts.find((cohort) => cohort.name === cohortName)) {
      throw new Error(`Cohort ${cohortName} already exists`)
    }
    this.cohorts.push({
      name: cohortName,
      students: []
    })
  }

  getCohort(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  removeCohort(cohortName) {
    if (!this.getCohort(cohortName)) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== cohortName)
  }

  addStudentToCohort(studentFirstName, studentLastName, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (!cohort) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    if (cohort.students.length >= 24) {
      throw new Error('Cohort is full')
    }
    const student = {
      id: this.idCount++,
      firstname: studentFirstName,
      lastname: studentLastName
    }
    if (
      this.cohorts
        .map((cohort) => cohort.students)
        .flat()
        .find(
          (s) =>
            s.firstname === studentFirstName && s.lastname === studentLastName
        )
    ) {
      throw new Error('Student cannot be in multiple cohorts at the same time')
    }
    cohort.students.push(student)
  }

  removeStudentFromCohort(studentFirstName, studentLastName, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (!cohort) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    const studentIndex = cohort.students.findIndex(
      (student) =>
        student.firstname === studentFirstName &&
        student.lastname === studentLastName
    )
    if (studentIndex === -1) {
      throw new Error(`Student not found in cohort ${cohortName}`)
    }
    cohort.students.splice(studentIndex, 1)
  }

  getStudentById(studentId) {
    return this.cohorts
      .map((cohort) => cohort.students)
      .flat()
      .find((student) => student.id === studentId)
  }

  getStudentByName(studentFirstName, studentLastName) {
    return this.cohorts
      .map((cohort) => cohort.students)
      .flat()
      .find(
        (student) =>
          student.firstname === studentFirstName &&
          student.lastname === studentLastName
      )
  }
}
