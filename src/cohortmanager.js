const studentData = require("./students.json")
const STUDENTS = studentData['students']
const Cohort = require("./cohort")
//const cohort = new Cohort()

class CohortManager {
    constructor() {
        this.cohorts = []
    }

    createCohort(name) {
        const createCohort = new Cohort(name)
        this.cohorts.push(createCohort)
    }

    searchCohort(name) {
        for (const cohort of this.cohorts)
            if (cohort === name) {
                return this.cohorts
            }
            else 'Cohort not found'
    }

    getStudentById(id) {
        const getId = STUDENTS.filter((x) => x.id === id)
        if (getId) {
            return getId
        } else 'Student not found.'
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

    removeStudent(id) {
        let getStudent = this.getStudentById(id)
        for (const cohort of this.cohorts) {
            if (cohort.id === getStudent.id) {
                cohort.students.splice(cohort.students.indexOf(cohort), 1)
                return this.cohorts
            }
            else if (id !== cohort.id) {
                return 'Student not found.'
            }
        }
    }



}
module.exports = CohortManager