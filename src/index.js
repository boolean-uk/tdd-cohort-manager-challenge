/* eslint-disable no-throw-literal */
class CohortList {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)

    return newCohort
  }

  searchCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (!found) {
      throw 'cohort not found'
    }

    return found
  }

  removeCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    const foundIndex = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )

    if (foundIndex >= 0 && found) {
      this.cohorts.splice(foundIndex, 1)
    }

    if (!found) {
      throw 'cohort not found'
    }

    return found
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    const newStudent = new Student(firstName, lastName, githubUsername, email)

    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (found) {
      found.students.push(newStudent)
    } else {
      throw 'cohort not found'
    }

    return newStudent
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.students = []
  }
}

class Student {
  constructor(firstName, lastName, githubUsername, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export { Cohort, Student }
export default CohortList
