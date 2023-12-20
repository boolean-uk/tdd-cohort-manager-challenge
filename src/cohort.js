class Cohort {
    constructor() {
        this.cohortList = []
    }

    createCohort(cohortName) {
        const newCohort = {name: cohortName, students: []}
        const cohortExists = this.cohortList.find(cohort => cohort.name === cohortName)
        
        if(cohortExists) {
            throw new Error('This Cohort already exists, please choose another name!')
        }
        if (!cohortName) {
            throw new Error('Please give a name to your class!')
        } else {
            this.cohortList.push(newCohort)
        }

        return this.cohortList
    }
}

const cohort = new Cohort()
cohort.createCohort('cohort 1')
cohort.createCohort('cohort 2')
console.log(cohort.cohortList)

export default Cohort