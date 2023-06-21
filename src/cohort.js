class Cohort {
  constructor() {
    this.cohortObject = {}
    this.cohortList = []
  }

  findCohort(cohortName) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!cohort) {
      return 'cohort does not exist'
    }
    return cohort
  }

  createCohort(cohortName) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (existingCohort) {
      return 'cohort already exists'
    }

    this.cohortObject.cohortName = cohortName
    this.cohortList.push(this.cohortObject)
    return this.cohortList
  }
}

class Student {
  constructor(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }

  createStudent(uniqueID, firstName, lastName, githubUsername, email) {
    const newStudent = {
      studentID: uniqueID,
      firstName,
      lastName,
      githubUsername,
      email
    }
    this.studentID++
    console.log(newStudent)
    return newStudent
  }
}

export { Cohort, Student }
