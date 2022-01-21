const Student = require('./student.js')

class Cohort {
    constructor(name) {
        this.name = name
        this.students = []
    }

    checkCohortName(name) {
        return this.name === name
    }

    addStudentToCohort(id, first, last, github, email) {
        this.students.push(new Student(id, first, last, github, email))
    }

    removeStudentFromCohort(id) {
        for(let i = 0; i < this.students.length; i++) {
            let student = this.students[i]
            if(student.checkID(id)) {
                this.students.splice(i,1)
            }
        }
    }

}

module.exports = Cohort