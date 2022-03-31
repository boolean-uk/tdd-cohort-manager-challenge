class Cohort {
  constructor (num) {
    this.name = num
    this.students = []
    this.capacity = 24
  }

  add (newStudent) {
    if (this.students.length <= this.capacity) this.students.push(newStudent)
    return Error('this cohort hit the capacity')
  }

  remove (studentName) {
    for (const studentProfile of this.students) {
      const targetIndex = this.students.indexOf(studentProfile)
      if (studentProfile.fullName === studentName) return this.students.splice(targetIndex, 1)
    }
    return Error('this student do not exist')
  }

  search (studentId) {
    for (const studentProfile of this.students) {
      if (studentProfile.id === studentId) return studentProfile
    }
    return Error('this student do not exist')
  }
}

module.exports = Cohort
