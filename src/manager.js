class Manager {

    constructor() {
        this.cohortList = []
        this.counter = 0
    }

    create(string) {
        this.counter++
        const cohort = { classNo: this.counter, name: string }
        this.cohortList.push(cohort)
        return string
    }
    showList() {
        return this.cohortList
    }
    addCohort() {
        let cohortName = 'Cohort 4'
        this.cohortList.push(cohortName)
        return this.cohortList
    }
    searchCohort(string) {
        for (let i = 0; i < cohortList.length; i++) {
            if (string.toLowerCase() === cohortList[i]) {
                return string
            }
        }
    }
}

module.exports = Manager