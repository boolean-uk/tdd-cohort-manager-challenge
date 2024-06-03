/* eslint-disable no-throw-literal */
class CohortList {
  constructor() {
    this.cohorts = []
    this.id = 1
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
    const newStudent = new Student(
      firstName,
      lastName,
      githubUsername,
      email,
      this.id
    )

    this.id++

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

  removeStudent(cohortName, studentID) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (foundCohort) {
      const foundStudent = foundCohort.students.find(
        (student) => student.studentID === studentID
      )

      const foundStudentIndex = foundCohort.students.findIndex(
        (student) => student.studentID === studentID
      )

      if (foundStudentIndex >= 0 && foundStudent) {
        foundCohort.students.splice(foundStudentIndex, 1)
      }

      if (!foundStudent) {
        throw 'student not found'
      }

      return foundStudent
    }

    if (!foundCohort) {
      throw 'cohort not found'
    }
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.students = []
  }
}

class Student {
  constructor(firstName, lastName, githubUsername, email, studentID) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export { Cohort, Student }
export default CohortList
