const Cohort = require('./cohort.js')

class Manager {

    constructor() {
        this.cohortList = []
    }

    create() {
        return this.cohortList
    }

    addCohort(name) {
        let cohortName = new Cohort(name)
        for (let i = 0; i < this.cohortList.length; i++) {
            if (this.cohortList[i].cName === name || this.cohortList[i].cName === '')
                return 'Name already exists / Cannot exist without a name'
        }
        this.cohortList.push(cohortName)
        return cohortName
    }

    searchCohort(name) {
        for (let i = 0; i < this.cohortList.length; i++) {
            if (name === this.cohortList[i].cName) {
                return this.cohortList[i]
            }
        }
        return 'ERROR: Cohort not found'
    }

    removeCohort(cName) {
        for (let i = 0; i < this.cohortList.length; i++) {
            if (this.cohortList[i].cName === cName) {
                this.cohortList.splice(i, 1)
            }
        }
        return this.cohortList
    }

}

module.exports = Manager