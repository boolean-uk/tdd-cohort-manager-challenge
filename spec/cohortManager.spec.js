const { CohortManager } = require('../src/cohortManager')

describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('addCohort', () => {
    it('create a new cohort with a cohort name', () => {
      // SETUP
      const expected = 'Cohort 1 created'

      // EXECUTE
      const result = cohortManager.addCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('searchCohort', () => {
    it('by name', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 found'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('cohort does not exist', () => {
      // SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('addStudent', () => {
    it('add a student to a specific cohort', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = [
        {
          id: 1,
          forename: 'Joe',
          surname: 'Bloggs',
          github: 'joebloggs23',
          email: 'joebloggs23@gmail.com'
        }
      ]

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )

      //   RESULT
      expect(result).toEqual(expected)
    })

    it('add student to non existant cohort', () => {
      // SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )

      //   RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('removeCohort', () => {
    it('remove cohort by cohort name', () => {
      //  SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 removed'

      // EXECUTE
      const result = cohortManager.removeCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('cohort does not exist', () => {
      //  SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.removeCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('removeStudent', () => {
    it('from a specific cohort', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'Joe Bloggs removed from Cohort 1'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 1', 'Joe Bloggs')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('cohort does not exist', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'Cohort 2 does not exist'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 2', 'Joe Bloggs')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('student does not exist', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'John Smith is not a student of Cohort 1'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 1', 'John Smith')

      // RESULT
      expect(result).toEqual(expected)
    })
  })
})
