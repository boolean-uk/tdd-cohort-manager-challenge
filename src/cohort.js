// const Student = require("./student.js");

class Cohort {
    constructor() {
        this.students = []
    }

    add(student) {
       this.students.push(student)
       return this.students
    }

    existError = 'Student is not in the register'

    remove(studentID) {
        const removeStudent = studentID === this.student.studentID
        if(removeStudent) {
            this.students.splice(removeStudent, 1) [0]
        } else return this.existError
    }



}

module.exports = Cohort
