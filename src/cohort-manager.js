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
        return `Cohort${this.cohortCounter}`
    }
    
    createNewCohort(name) {
        this.cohorts.push(new Cohort(name))
        return this.cohorts
    }
    
    createStudent(firstName, lastName, githubUsername, email) {
        this.studentIDGenerator()
        this.students.push(new Student(this.studentIDCounter, firstName, lastName, githubUsername, email))
        return this.students
    }

    addStudentToCohort(studentID, cohortName) {
        const cohort = this.searchCohortByName(cohortName)
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].studentID === studentID) {
                cohort.studentList.push(this.students[i])
                return cohort.studentList
            }
            return 'Student not found!'
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
        for (let i = 0; i < this.cohorts.length; i++) {
            for (let j = 0; j < this.cohorts[i].studentList; j++) {
                if (this.cohorts[i].studentList[j].studentID === studentID) {
                    return this.cohorts[i].studentList[j]
                }
            }
        }
    }

    getAllCohorts() {
        return this.cohorts
    }

    getAllStudents() {
        return this.students
    }

}

module.exports = CohortManager;