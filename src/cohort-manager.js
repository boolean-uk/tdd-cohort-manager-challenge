const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

class CohortManager {

    constructor() {
        this.studentWaitingList = [];
        this.cohorts = [];
    }
    
    createNewCohort(name) {
        this.cohorts.push(new Cohort(name))
        return this.cohorts
    }
    
    createStudent(id, firstName, lastName, githubUsername, email) {
        this.studentWaitingList.push(new Student(id, firstName, lastName, githubUsername, email))
        return this.studentWaitingList
    }

    addStudentToCohort(studentID, cohortName) {
        const cohort = this.searchCohortByName(cohortName)
        for (let i = 0; i < this.studentWaitingList.length; i++) {
            if (this.studentWaitingList[i].studentID === studentID) {
                cohort.studentList.push(this.studentWaitingList[i])
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

    getAllCohorts() {
        return this.cohorts
    }

}

module.exports = CohortManager;