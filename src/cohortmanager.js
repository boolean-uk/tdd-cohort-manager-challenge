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
        this.cohorts.forEach((c) => {
            if (c === name) {
                return this.cohorts
            }
            else 'Cohort not found'
        })
    }

    getStudentById(id) {
        const getId = STUDENTS.filter((x) => x.id === id)
        return getId

    }

    addStudent(cohortname, id) {
        let getStudent = this.getStudentById(id)
        let pos = this.cohorts

        for (let i = 0; i < pos.length; i++)
            if (pos[i].cohortname === cohortname) {
                pos[i].students.push(getStudent)
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
        console.log('src', getStudent)
        for (const cohort of this.cohorts) {
            if (cohort.id === getStudent.id) {
                cohort.students.splice(cohort.students.indexOf(cohort), 1)
                return this.cohorts
            }
            else return 'ERROR: Student not found'
        }
    }



}
module.exports = CohortManager