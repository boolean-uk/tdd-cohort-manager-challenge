class CohortManager {
  constructor() {
    this.cohortList = []
    this.cohortID = 1
    this.studentID = 1
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error('cohortName not string provided')
    }

    if (cohortName === '') {
      throw new Error('cohortName not provided')
    }

    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (cohort) {
      throw new Error('cohortName already exists')
    }

    const newCohort = new Cohort(this.cohortID++, cohortName, [])
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchCohort(cohortName) {
    const searchedCohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (!searchedCohort) {
      throw new Error('cohortName not found')
    }

    return searchedCohort
  }

  addStudent(firstName, lastName, gitHubUsername, email, cohortID) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortID === cohortID
    )

    if (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof gitHubUsername !== 'string' ||
      typeof email !== 'string'
    ) {
      throw new Error('student not string provided')
    }

    if (cohort.cohortStudents.length >= 24) {
      throw new Error('adding students is not possible beyond the 24 limit')
    }

    const student = this.cohortList.some((cohort) =>
      cohort.cohortStudents.some(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )
    )

    if (student) {
      throw new Error('the student is already in a cohort')
    }

    if (cohort) {
      const newStudent = new Student(
        this.studentID++,
        firstName,
        lastName,
        gitHubUsername,
        email
      )
      cohort.cohortStudents.push(newStudent)
      return cohort
    }

    throw new Error('cohortID not found')
  }

  removeCohort(cohortName) {
    const cohort = this.cohortList.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )

    if (cohort !== -1) {
      this.cohortList.splice(cohort, 1)
      return this.cohortList
    }

    throw new Error('cohortName not found')
  }

  removeStudent(studentID, cohortID) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortID === cohortID
    )

    if (!cohort) {
      throw new Error('cohortID not found')
    }

    const student = cohort.cohortStudents.findIndex(
      (student) => student.studentID === studentID
    )

    if (student === -1) {
      throw new Error('studentID not found')
    }

    if (cohort.cohortStudents[0].studentID !== studentID) {
      throw new Error(
        'student can not be removed as it is not present in the first place'
      )
    }

    cohort.cohortStudents.splice(student, 1)
    return cohort
  }

  searchStudent(studentID, cohortID) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortID === cohortID
    )

    if (!cohort) {
      throw new Error('cohortID not found')
    }

    const student = cohort.cohortStudents.find(
      (student) => student.studentID === studentID
    )

    if (!student) {
      throw new Error('studentID not found')
    }

    return student
  }
}

class Cohort {
  constructor(cohortID, cohortName, cohortStudents = []) {
    this.cohortID = cohortID
    this.cohortName = cohortName
    this.cohortStudents = cohortStudents
  }
}

class Student {
  constructor(studentID, firstName, lastName, gitHubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.gitHubUsername = gitHubUsername
    this.email = email
  }
}

export { Cohort, Student }
export default CohortManager
