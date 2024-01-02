import Cohort from "../.././src/CohortManager.js"
import Student from "../../src/Student.js"


describe('Cohort Manager', () => {
    let cohortManager
  
    beforeEach(() => {
      cohortManager = new Cohort()
    })
  
    it('Create a cohort with a cohort name', () => {
        const cohort = new Cohort('Cohort 11')
        cohortManager.addCohort(cohort)
        expect(cohortManager.cohortList.includes(cohort)).toBe(true)
      })
   
  
    it('Search for a cohort by cohort name', () => {
      const cohort = new Cohort('Cohort 11')
      cohortManager.addCohort(cohort)
      const found = cohortManager.findCohortByName('Cohort 11')
      expect(found).toEqual(cohort)
    })

})