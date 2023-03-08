class Cohort {
  constructor(name) {
    this.name = name
    this.maxStudents = 24
    this.students = []
  }

  addStudent(student) {
    if (student.inCohort) return 'Student is already in a Cohort'
    if (this.maxStudents > this.students.length) {
      student.inCohort = true
      this.students.push(student)
    } else {
      return 'Cohort is full'
    }
  }

  removeStudent(targetStudent) {
    const removeIndex = this.students.findIndex(
      (student) => student === targetStudent
    )
    if (removeIndex === -1) return 'Student is not in this Cohort'
    targetStudent.inCohort = false
    this.students.splice(removeIndex, 1)
  }
}

module.exports = Cohort
