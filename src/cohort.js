class Cohort {
  constructor () {
    this.student = []
  }

  addStudent (ID, firstName, lastName, githubUserName, email) {
    const studentObject = {
      studentID: ID,
      firstName: firstName,
      lastName: lastName,
      githubUserName: githubUserName,
      email: email
    }

    this.student.push(studentObject)
  }
}

module.exports = Cohort
