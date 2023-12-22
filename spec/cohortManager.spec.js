import CohortManager from '../src/cohortManager.js'
import Cohort from '../src/cohort.js'

describe('CohortManager:', () => {
  let manager

  beforeEach(() => {
    manager = new CohortManager()
    Cohort.resetId()
  })

  describe('createCohort -', () => {
    it('valid cohortName input', () => {
      const result = manager.createCohort('Corey', 16)

      const expected = {
        name: 'Corey',
        cohortId: 1,
        capacity: 16
      }

      expect(result).toBe(1)
      expect(manager.cohorts[0].details).toEqual(expected)
    })
    // TODO: invalid input
  })

  describe('searchCohortByName -', () => {
    it('return cohort on match', () => {
      manager.createCohort('Corey')
      manager.createCohort('Potato')
      manager.createCohort('Class 11')

      const result = manager.searchCohortByName('Potato')

      const expected = {
        name: 'Potato',
        cohortId: 2,
        capacity: 24
      }

      expect(result.details).toEqual(expected)
    })
  })
})
