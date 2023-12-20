class StudentManager {
  constructor() {
    this.list = []
    this.studentIDcounter = 0
  }

  assignStudentID() {
    this.list[this.list.length - 1].studentID = this.studentIDcounter
    return this.list[this.list.length - 1].studentID
  }

  increaseStudentIDCount() {
    this.studentIDcounter += 1
    return this.studentIDcounter
  }

  setList(student) {
    this.list.push(student)
    return this.list
  }

  handleNewStudent(student) {
    this.setList(student)
    this.increaseStudentIDCount()
    this.assignStudentID()
    return this.list
  }
}

export { StudentManager }
