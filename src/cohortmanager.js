const Cohort = require("./cohort")


class CohortManager {
    constructor() {
        this.cohorts = []
    }

    createCohort(cohortName) {
        const createCohort = new Cohort(cohortName)
        this.cohorts.push(createCohort)
    }

    searchCohort(cohortName) {
        for (const cohort of this.cohorts) {
            if (cohort.cohortname === cohortName) {
                return cohort
            }
        }
        return 'Cohort not found'
    }

    addStudent(cohortname, id) {
        const cohort = this.searchCohort(cohortname)
        const studentId = cohort.getStudentById(id)

        if (studentId.id === id) {
            cohort.students.push(studentId)
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
        const cohortCheck = this.searchCohort(cohortName)
        console.log('src',cohortCheck)
        const removeId = cohortCheck.removeStudent(id)
        console.log(removeId)
        if (cohortCheck === 'Cohort not found') {
            return 'Cohort not found'
        } return cohortCheck.removeStudent(id)

    }


}
module.exports = CohortManager