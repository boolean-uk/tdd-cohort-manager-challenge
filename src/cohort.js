const Student = require('./student.js')

class Cohort {

    constructor(cName) {
        this.studentList = []
        this.cName = cName
    }
    createList() {
        return this.studentList
    }

    addStudent(id, firstName, lastName, githubUser, email) {
        let newStudent = new Student(id, firstName, lastName, githubUser, email)
        this.studentList.push(newStudent)
        return newStudent
    }

    removeStudent(id) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].studentID === id) {
                this.studentList.splice(i, 1)

            }
        }
        return this.studentList
    }

    searchStudent(id) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (id === this.studentList[i]['studentID']) {
                return this.studentList[i]
            }
        }
        return 'ERROR: Student not found'
    }
}





module.exports = Cohort
