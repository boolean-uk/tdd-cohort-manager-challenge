class Cohort {
  constructor (num) {
    this.name = `Cohort ${num}`
    this.students = []
    this.capacity = 24
  }

  add (newStudent) {
    if (this.students.length <= this.capacity) this.students.push(newStudent)
    return 'ERROR – this cohort hit the capacity'
  }

  remove (studentName) {
    for (const studentProfile of this.students) {
      if (studentProfile.fullName === studentName) return this.students.filter((student) => student.fullName !== studentName)
    }
    return 'ERROR – this student do not exist'
  }

  search (studentId) {
    for (const studentProfile of this.students) {
      if (studentProfile.id === studentId) return studentProfile
    }
    return 'ERROR – this cohort do not exist'
  }
}

module.exports = Cohort
