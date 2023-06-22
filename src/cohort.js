class Cohorts {
  constructor() {
    this.cohortList = []
  }

  addCohort(cohortName) {
    if (cohortName === '') {
      throw new Error('Error: Please provide a Cohort name')
    }
    for (const cohort of this.cohortList) {
      const cohortNameList = Object.keys(cohort)[0]
      if (cohortNameList === cohortName) {
        throw new Error('Error: The name already exists')
      }
    }
    const newCohort = { [cohortName]: [] }
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchByName(cohortName) {
    if (this.cohortList.length === 0) {
      return `ERROR: Cohort List is empty`
    }

    for (const cohort of this.cohortList) {
      const cohortNameList = Object.keys(cohort)[0]
      console.log(cohortNameList)
      if (cohortNameList === cohortName) {
        return cohort
      }
    }
  }

  removeByName(cohortName) {
    if (this.cohortList.length === 0) {
      return `ERROR: Cohort List is empty`
    }

    for (const cohort of this.cohortList) {
      const cohortNameList = Object.keys(cohort)[0]
      if (cohortNameList === cohortName) {
        const index = this.cohortList.indexOf(cohort)
        this.cohortList.splice(index, 1)
        console.log(this.cohortList)
        return this.cohortList
      }
    }
  }
}
const cohort = new Cohorts()
cohort.addCohort('Cohort 1')
cohort.addCohort('Cohort 2')
cohort.addCohort('Cohort 3')
cohort.addCohort('Cohort 4')
cohort.addCohort('Cohort 5')
cohort.addCohort('Cohort 6')
cohort.addCohort('Cohort 7')
cohort.addCohort('Cohort 8')
cohort.addCohort('Cohort 9')
cohort.addCohort('Cohort 10')
console.log(cohort)
module.exports = Cohorts
