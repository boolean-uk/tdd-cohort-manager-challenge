class Cohort {
    constructor() {
        this.cohortList = []
    }

    createCohort(cohortName) {
        const newCohort = {name: 'Cohort 1', students: []}
        const cohortExists = this.cohortList.find(cohort => cohort.name === cohortName)

        if(!cohortExists) {
            this.cohortList.push(newCohort)
        } else {
            throw new Error('this Cohort already exists, please choose another name!')
        }

        return this.cohortList
    }
}

const cohort = new Cohort()
cohort.createCohort('Cohort 1')
cohort.createCohort('Cohort 2')
console.log(cohort.cohortList)
export default Cohort