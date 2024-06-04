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
}

export default CohortManager