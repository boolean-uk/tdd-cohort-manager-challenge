class StudentManager {
  constructor() {
    this.list = []
    this.studentIDcounter = 0
  }

  assignStudentID() {
    this.list[this.list.length - 1].studentID = this.studentIDcounter
    console.log(this.list)
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
}

export { StudentManager }
