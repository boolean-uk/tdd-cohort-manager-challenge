class Cohort {
    constructor(name) {
        this.name = name
        this.cohortList = []
    }

    createCohortName(name) {
        const cohortName = new Cohort(name)
        this.cohortList.push(cohortName)
        return cohortName
    }
}

export default Cohort