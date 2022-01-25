const Student = require("./student")

class Cohort {
    constructor(name) {
        this.cohortName = name
        this.studentList = []
        this.capacity = 24
    }

    addStudent(id, firstName, lastName, githubUser, email) {
        const newStudent = new Student(id, firstName, lastName, githubUser, email)
        this.studentList.push(newStudent)
        return newStudent

    }

    removeStudent(name) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].firstName === name) {
                this.studentList.splice(i, 1)
            }
        }
        return this.studentList
    }

    searchStudent(name) {
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].firstName === name) {
                return this.studentList[i]
            }
        }
        return 'error'
    }

    fixedCapacity() {
        if (this.studentList.length > this.capacity) {
            return 'maximum capacity reached'
        }
    }


}

module.exports = Cohort