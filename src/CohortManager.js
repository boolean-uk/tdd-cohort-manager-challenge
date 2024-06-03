class CohortManager {
  constructor() {
    this.cohortList = []
    this.cohortID = 1
    this.studentID = 1
    this.cohortStudents = []
  }

  createCohort(cohortName) {
    const newCohort = new Cohort(
      this.cohortID++,
      cohortName,
      this.cohortStudents
    )
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchCohort(cohortName) {
    const searchedCohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    return searchedCohort
  }

  addStudent(firstName, lastName, gitHubUsername, email, cohortID) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortID === cohortID
    )

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
  }
}

class Cohort {
  constructor(cohortID, cohortName, cohortStudents) {
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
