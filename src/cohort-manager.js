const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

class CohortManager {

    constructor() {
        this.cohortCounter = 0;
        this.studentIDCounter = 0;
        this.students = [];
        this.cohorts = [];
    }

    studentIDGenerator() {
        this.studentIDCounter++;
    }

    cohortNameGenerator() {
        this.cohortCounter++
        return `Cohort #${this.cohortCounter}`
    }
    
    createNewCohort() {
        this.cohorts.push(new Cohort(this.cohortNameGenerator()))
        return this.cohorts
    }
    
    createStudent(firstName, lastName, githubUsername, email) {
        this.studentIDGenerator()
        this.students.push(new Student(this.studentIDCounter, firstName, lastName, githubUsername, email))
        return this.students
    }

    createNStudents(num, firstName, lastName, githubUsername, email) {
        for (let i = 0; i < num; i++) {
            this.studentIDGenerator()
            this.students.push(new Student(this.studentIDCounter, firstName, lastName, githubUsername, email))
        }
    }

    addStudentToCohort(studentID, cohortName) {
        const cohort = this.searchCohortByName(cohortName)
        const student = this.searchStudentbyID(studentID)
        if (student === undefined) { return 'Student not found!' }
        if (cohort.studentList.length < cohort.cohortCapacity) {
            cohort.studentList.push(student)
            return cohort.studentList
        } else {
            return 'This cohort is already full!'
        }
    }

    removeStudentFromCohort(studentID, cohortName) {
        const cohort = this.searchCohortByName(cohortName)
        for (let i = 0; i < cohort.studentList.length; i++) {
            if (cohort.studentList[i].studentID === studentID) {
                cohort.studentList.splice(i, 1)
                return cohort
            }
            return 'Student not found!'
        }
    }

    searchCohortByName(cohortName) {
        const cohortFound = this.cohorts.find((cohort) => cohort.cohortName === cohortName)
        if (cohortFound) return cohortFound
        return 'Cohort not found!'
    }

    removeCohortByName(name) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                this.cohorts.splice(i, 1)
            }
            return 'Cohort not found!'
        }
    }

    searchStudentbyID(studentID) {
        return this.students.find(student => student.studentID === studentID)
    }

    searchStudentbyName(firstName, lastName) {
        return this.students.find(student => student.firstName === firstName && student.lastName === lastName)
    }

    getAllCohorts() {
        return this.cohorts
    }

    getAllStudents() {
        return this.students
    }

}

module.exports = CohortManager;