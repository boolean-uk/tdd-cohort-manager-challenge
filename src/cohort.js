// const Student = require("./student.js");

class Cohort {
    constructor(cohortName) {
        this.cohortName = cohortName
        this.students = []
        this.existError = 'Student is not in the register'
    }

    add(student) {
       this.students.push(student)
       return this.students
    }

    remove (studentID) {
        for ( let i = 0; i < this.students.length; i++ ) {
            if (this.students[i].studentId === studentID) {
                this.students.splice(this.students[i],1)
            }
        }
        return this.existError
    }

}

module.exports = Cohort
