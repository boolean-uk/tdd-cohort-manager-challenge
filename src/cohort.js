class Cohort {
  constructor (num) {
    this.name = num
    this.students = []
    this.capacity = 24
  }

  add (newStudent) {
    if (this.students.length <= this.capacity && !this.students.includes(newStudent)) this.students.push(newStudent)
    return Error('this cohort hit the capacity')
  }

  remove (studentName) {
    const targetStudent = this.students.find(student => student.fullName === studentName)
    const targetIndex = this.students.indexOf(targetStudent)
    if (!targetStudent) return Error('this student do not exist')
    this.students.splice(targetIndex, 1)
    return this.students
  }

  search (studentId) {
    const targetStudent = this.students.find(student => student.id === studentId)
    if (!targetStudent) return Error('this student do not exist')
    return targetStudent
  }
}

module.exports = Cohort
