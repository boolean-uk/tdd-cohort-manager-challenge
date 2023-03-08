class Cohort {
  constructor(name) {
    this.name = name
    this.maxStudents = 24
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeStudent(targetStudent) {
    const removeIndex = this.students.findIndex(
      (student) => student === targetStudent
    )
    if (removeIndex === -1) return 'Student is not in this Cohort'
    this.students.splice(removeIndex, 1)
  }
}

module.exports = Cohort
