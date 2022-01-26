const studentData = require("./students.json")
const STUDENTS = studentData['students']

class Cohort {
    
constructor(cohortname){
this.cohortname = cohortname
this.students = []
}

getStudentById(id) {
    for (const students of STUDENTS){
        if (students.id === id) {return students}
         return 'Student not found.'
        }
}

removeStudent(id) {
    for (const student of this.students) {
      if (student.id === id) {
        this.students.splice(this.students.indexOf(student), 1)
        return this.students
      }
    }
    return 'Student not found.'
  }

}

module.exports = Cohort