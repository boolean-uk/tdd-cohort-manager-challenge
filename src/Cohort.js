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
  }

  getName() {
    return this.name
  }

  getStudents() {
    return this.studentsList
  }

  removeStudent(studentID) {
    const i = this.studentsList.findIndex((student) => student.id === studentID)
    this.studentsList.splice(i, 1)
  }
}

module.exports = Cohort
