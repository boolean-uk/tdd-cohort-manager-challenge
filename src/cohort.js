const Student = require('./student.js')


class Cohort {

    constructor(cName) {
        this.studentList = []
        this.cName = cName
        this.capacity = 24
    }
    createList() {
        return this.studentList
    }

    addStudent(id, firstName, lastName, githubUser, email) {
        let newStudent = new Student(id, firstName, lastName, githubUser, email)
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].studentID === id) {
                return 'Student cannot exist in multiple cohorts'
            }
        }
        this.studentList.push(newStudent)
        return newStudent
    }

    removeStudent(id) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].studentID === id) {
                this.studentList.splice(i, 1)
                return this.studentList
            }
        }
        return 'Non-existent: Student Cannot be removed'
    }

    searchStudent(id) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (id === this.studentList[i]['studentID']) {
                return this.studentList[i]
            }
        }
        return 'ERROR: Student not found'
    }

    fixedCapacity() {
        if (this.studentList.length === this.capacity) {
            return 'Limit exceeded at 24'
        }
    }

    searchStudentby(first, last) {
        const newList = []
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].firstName === first && this.studentList[i].lastName === last) {
                newList.push(this.studentList[i])
            }
        }
        return newList
    }

}



module.exports = Cohort
