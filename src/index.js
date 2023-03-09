class Cohort {
  createCohort(name, ID) {
    const cohort = {
      cohortID: ID,
      name: name,
      students: []
    }
    return cohort
  }
}

class Student {
  createStudent(firstName, lastName, github, email, ID) {
    const student = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      githubName: github,
      studentID: ID,
      cohortID: null
    }
    return student
  }
}

class Manager {
  constructor() {
    this.cohorts = []
    this.students = []
  }

  createNewCohort(name) {
    this.cohorts.push(new Cohort().createCohort(name, this.cohorts.length + 1))
  }

  createNewStudent(firstName, lastName, github, email) {
    this.students.push(
      new Student().createStudent(
        firstName,
        lastName,
        github,
        email,
        this.students.length + 1
      )
    )
  }

  searchForCohortByName(name) {
    return this.cohorts.filter((cohort) => cohort.name === name)
  }

  searchForCohortByID(ID) {
    return this.cohorts.find((cohort) => cohort.cohortID === ID)
  }

  searchForStudentByID(ID) {
    return this.students.find((student) => student.studentID === ID)
  }

  addStudentToCohort(StudentID, CohortID) {
    const foundStudent = this.searchForStudentByID(StudentID)
    const foundCohort = this.searchForCohortByID(CohortID)

    foundStudent.cohortID = CohortID
    foundCohort.students.push(foundStudent)
    return foundCohort
  }
}
// const NewCohort = new Manager()
// NewCohort.createNewCohort('software dev')
// NewCohort.createNewStudent(
//   'Joe',
//   'Bobby',
//   'JoeBobbyGithub',
//   'joebobs@gmail.com'
// )
// console.log(NewCohort.addStudentToCohort(1, 1))
// console.log(NewCohort.students)

module.exports = { Cohort, Manager, Student }
