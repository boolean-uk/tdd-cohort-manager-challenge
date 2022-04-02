import Student from './student.js'
export default class Cohort {
  constructor(name, id) {
    this.students = []
    this.name = name
    this.id = id
    this.maxCapacity = 3
  }

  addStudent(studentName, studentId, github, email) {
    if (this.students.length >= this.maxCapacity) return 'Cohort is full'
    console.log(this.students.length, this.maxCapacity)
    this.students.push({
      ...new Student(studentName, studentId, github, email)
    })
  }

  removeStudent(studentId) {
    const index = this.students.findIndex((student) => student.id === studentId)
    if (index === -1) return console.error('Student not found')
    this.students.splice(index, 1)
  }
}
