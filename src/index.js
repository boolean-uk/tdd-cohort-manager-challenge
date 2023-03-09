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
}
const NewCohort = new Manager()
NewCohort.createNewCohort('software dev')
console.log(NewCohort.searchForCohortByName('software dev'))
console.log(NewCohort.searchForCohortByID(1))

module.exports = { Cohort, Manager, Student }
