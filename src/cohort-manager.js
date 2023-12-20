import { Manager } from './manager.js'

class CohortManager extends Manager {
  searchBy(name) {
    return this.list.find((cohort) => cohort.cohortName === name)
  }
}
export { CohortManager }
