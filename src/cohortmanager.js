const studentData = require("./students.json")
const STUDENTS = studentData['students']
const Cohort = require("./cohort")

class CohortManager {
    constructor() {
        this.cohorts = []
    }

    createCohort(name) {
        const createCohort = new Cohort(name)
        this.cohorts.push(createCohort)
    }

    searchCohort(cohortName) {
        const getCohort = this.cohorts.filter((x) => x.cohortname === cohortName)
        if (getCohort) {
            return getCohort
        }
        else 'Cohort not found'
    }

    getStudentById(id) {
        for (const students of STUDENTS)
            if (students.id === id) {
                return students
            } else return 'Student not found.'
    }

    addStudent(cohortname, id) {
        let getStudent = this.getStudentById(id)
        for (const cohort of this.cohorts)
            if (cohort.cohortname === cohortname) {
                cohort.students.push(getStudent)
            } return `Student successfully added to ${cohortname}`
    }

    removeCohort(cohortname) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortname === cohortname) {
                this.cohorts.splice(i, 1)
                return this.cohorts
            }
            else return 'ERROR : Cohort not found.'
        }
    }

    removeStudent(cohortName, id) {
        let cohortCheck = this.searchCohort(cohortName)
        let getStudent = this.getStudentById(id)
        for (let cohort of cohortCheck) {
            if (cohort.id === getStudent.id) {
                cohort.students.splice(cohort.students.indexOf(cohort), 1)
                return cohort.students
            }
        }
    }
}
module.exports = CohortManager