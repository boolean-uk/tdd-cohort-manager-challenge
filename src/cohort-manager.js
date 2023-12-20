import Cohort from './cohort.js'

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    if (name.length === 0) throw new Error('Cohort needs a name!')
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)
    return cohort
  }

  removeCohort(name) {
    return (this.cohortList = this.cohortList.filter(
      (item) => item.name !== name
    ))
  }
}

export default CohortManager

// const cohortManager = new CohortManager()
// cohortManager.createCohort('StayHere')
// cohortManager.createCohort('RemoveMe')
// console.log(cohortManager.cohortList)
// cohortManager.removeCohort('RemoveMe')
// console.log(cohortManager.cohortList)
