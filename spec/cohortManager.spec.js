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
    beforeEach(() => {
      manager.createCohort('Corey')
      manager.createCohort('Potato')
      manager.createCohort('Class 11')
    })

    it('return cohort on match', () => {
      const result = manager.searchCohortByName('Potato')

      const expected = {
        name: 'Potato',
        cohortId: 2,
        capacity: 24
      }

      expect(result.details).toEqual(expected)
    })

    it('throw error when no match', () => {
      const callback = () => manager.searchCohortByName('Tick Tock Clock')

      expect(callback).toThrowError('cohort name not found')
    })
  })

  describe('removeCohortByName', () => {
    beforeEach(() => {
      manager.createCohort('Corey')
      manager.createCohort('Potato')
      manager.createCohort('Class 11')
    })

    it('removing matching cohort name', () => {
      const result = manager.removeCohortByName('Potato')

      expect(result).toBe(2)
      expect(manager.cohorts[0].name).toBe('Corey')
      expect(manager.cohorts[1].name).toBe('Class 11')
    })
  })
})
