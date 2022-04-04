class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.maxCapacity = 24
  }

  addStudent(student) {
    if (this.students.length >= this.maxCapacity)
      throw new Error('Cohort at max capacity already.')

    this.students.push(student)
    return student
  }

  removeStudent(id) {
    const studentToRemove = this.students.findIndex(
      (student) => student.id === id
    )
    if (studentToRemove === -1) throw new Error('Student not found')

    return this.students.splice(studentToRemove, 1)[0]
  }
}

module.exports = Cohort
