class CohortManager {
    constructor() {
        this.cohorts = []
        this.id = 1
    }
    createCohort(name) {
        if (name === undefined) {
            throw "No value given"
        }
        if (typeof name !== "string") {
            throw "Name must be a string"
        }
        this.cohorts.push({name: name, students: []})
    }
    search(cohort) {
        const cohortSearch = this.cohorts.find(c => c.name === cohort)
        if (cohortSearch === undefined) {
            throw "This cohort doesn't exist"
        }
        return cohortSearch
    }
    removeCohort(cohort) {
        let cohortIndex
        this.cohorts.forEach((c, index) => {
            if (cohort === c.name) {
                cohortIndex = index
            }
        })
        if (cohortIndex === undefined) {
            throw "This cohort doesn't exist"
        }
        this.cohorts.splice(cohortIndex, 1)
    }

}

export default CohortManager