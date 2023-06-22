const CohortManager = require('')

describe('Test cohort manager'),
  () => {
    let manager

    beforeEach(() => {
      manager = new CohortManager()
    })

    it('should create a cohort name', () => {
      //set up
      const namesCohort = 'Cohort 10'

      // execute
      const result = manager.createCohort(namesCohort)

      // verify
      expect(result).toBe(true)

      expect(manager.cohorts.length).toBe(0)

      expect(cohort.students).toEqual([])
    })
    it('should remove cohort by cohort name', () => {
      // set up
      const namesCohort = 'cohort 10'
      manager.createCohort(cohortName)

      const result = manager.removeCohort(cohortName)

      // Execute
      const result = cohortManager.removeCohort(cohortName)

      // verify
      expect(result).toBe(true)
      expect(manager.cohorts.length).toBe(0)
    })
  }
