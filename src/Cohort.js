class Cohort {
  constructor(name) {
    this.name = name
    this.studentsList = []
    this.lastID = 0
  }

  addStudent(firstName, lastName, username, email) {
    const studentToAdd = {
      firstName: firstName,
      lastName: lastName,
      id: this.lastID,
      username: username,
      email: email
    }
    this.studentsList.push(studentToAdd)
    console.log(this.studentsList)
  }

  getName() {
    return this.name
  }

  getStudents() {
    return this.studentsList
  }
}

module.exports = Cohort
