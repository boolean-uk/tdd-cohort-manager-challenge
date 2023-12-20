class StudentManager {
  constructor() {
    this.list = []
    this.studentIDcounter = 1
  }

  setList(student) {
    this.list.push(student)
    return this.list
  }
}

export { StudentManager }
