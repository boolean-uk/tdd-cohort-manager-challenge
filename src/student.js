import students from './studentsDB.js'

class Student {
  constructor(id) {
    this.id = id
  }
}

const ns = new Student(3)
console.log(ns)

export default Student
