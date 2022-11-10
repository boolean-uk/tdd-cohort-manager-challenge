const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class Cohortmanager {
    constructor() {
        this.studentList = []
        this.cohortList = []
        this.studentId = 1
    }

    createCohort(name) {
        if (name === null) {
            throw new Error('A Cohort must have a name')
        }
        if (typeof name !== 'string') {
            throw new Error('A Cohort must be a sequence of characters')
        }
        const createdCohort = new Cohort(name)
        this.cohortList.push(createdCohort)
        return this.cohortList
    }

    createStudent(firstname, surname, gitHub, email) {
        const createdStudent = new Student(
            firstname,
            surname,
            this.studentId,
            gitHub,
            email
        )
        this.studentId++
        this.studentList.push(createdStudent)
        return createdStudent
    }

    searchCohort(name) {
        if (typeof name !== 'string') {
            throw new Error('You have to use a string to search')
        }
        const searchedCohort = this.cohortList.find((cohort) =>
            cohort.cohortName.includes(name)
        )
        if (searchedCohort) {
            return searchedCohort
        }
        throw new Error(`Cohort ${name} doesn't exist`)
    }

    searchStudentId(id) {
        if (typeof id !== "number") {
            return
        }
        const searchedStudentId = this.studentList.find((student) => 
            student.id === id
        )
        if (searchedStudentId) {
            return searchedStudentId
        }
    }

    searchStudentName(name) {
        if (typeof name !== 'string') {
            return
        }
        let result= []
        const searchedStudentName = this.studentList.filter((student) =>
            student.name.includes(name)
        )
        const searchedStudentSurname = this.studentList.filter((student) =>
            student.surname.includes(name)
        )
        if (searchedStudentName !== undefined) {
            result.push(...searchedStudentName)
        }
        if (searchedStudentSurname !== undefined) {
            result.push(... searchedStudentSurname)
        }
        if (searchedStudentName || searchedStudentSurname) {
            return result
        }
    }

    searchStudent(nameOrId) {
        const searchedId = this.searchStudentId(nameOrId)
        const searchedName = this.searchStudentName(nameOrId)
        if (searchedId !== undefined) {
            return searchedId
        }
        if (searchedName !== undefined) {
            if (searchedName.length >1){
            return searchedName
            }
            return searchedName[0]
        }
        throw new Error(`Student ${nameOrId} doesn't exist`)
    }
}


module.exports = Cohortmanager
