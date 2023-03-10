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

  removeCohortByName(name) {
    const index = this.cohorts.map((e) => e.name).indexOf(name)
    if (index > -1) {
      this.cohorts.splice(index, 1)
      return this.cohorts
    } else return false
  }

  removeStudentFromCohort(StudentID) {
    const student = this.searchForStudentByID(StudentID)
    if (student.cohortID != null) {
      const oldCohort = this.cohorts.indexOf(
        this.searchForCohortByID(student.cohortID)
      )
      const oldStudent = this.cohorts[oldCohort].students.indexOf(student)
      this.cohorts[oldCohort].students.splice(oldStudent, 1)
    } else return false
    student.cohortID = null
    // currentCohort.students.map((e) => e.studentID).indexOf(StudentID)

    // const index = this.cohorts.map((e) => e.cohortID).indexOf(currentCohort)
    // console.log(index)
    // const studentInCohortArray = this.cohorts[index].students
    //   .map((i) => i.studentID)
    //   .indexOf(StudentID)
    // console.log(studentInCohortArray)
    // this.searchForStudentByID(StudentID).cohortID = null
    // console.log(this.cohorts, this.students)
  }
}

module.exports = { Cohort, Manager, Student }
