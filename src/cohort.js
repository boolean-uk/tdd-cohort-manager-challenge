class Cohort {
    constructor() {
        this.cohortList = []
    }

    createCohort(cohortName) {
        const newCohort = {name: cohortName, students: [], capacity: 24}
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)
        
        if(findCohort) {
            throw new Error('This Cohort already exists, please choose another name!')
        }
        if (!cohortName) {
            throw new Error('Please give a name to your class!')
        }
        if(this.cohortList.length > this.capacity) {
            throw new Error("Cohort list is full, please create another list!")
        } else {
            this.cohortList.push(newCohort)
        }

        return this.cohortList
    }

    searchCohort(cohortName) {
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)

        if (!findCohort) {
            throw new Error("Cohort not found")
        }

        return findCohort
    }
}

const cohort = new Cohort()
cohort.createCohort('Cohort 1')
console.log(cohort.searchCohort('Cohort 1'))
console.log(cohort.cohortList)

export default Cohort