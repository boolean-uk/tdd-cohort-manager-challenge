const CohortDetainment = require('../src/cohortManager.js')

describe('CohortDetainment', () => {
  let cd
  beforeEach(() => {
    cd = new CohortDetainment()
  })

  describe('createCohort()', () => {
    it('Expects a Cohort to be created', () => {
      const expected = { team1: [] }
      expect(cd.createCohort('team1')).toEqual(expected)
    })
  })

  describe('searchForCohort()', () => {
    it('Expects to find a specific Cohort by name', () => {
      const expected = { team1: [] }
      cd.createCohort('team1')
      expect(cd.searchForCohort('team1')).toEqual(expected)
    })
  })
  describe('addStudent()', () => {
    it('Expects a student to be added to a specified cohort', () => {
      const expected = {
        StudentID: 1,
        firstName: 'Noro',
        lastName: 'Jan',
        githubUsername: 'NoroAxper',
        email: 'classified'
      }
      cd.createCohort('team1')
      expect(cd.addStudent('team1', 'Noro')).toEqual(expected)
    })
  })

  describe('removeCohort()', () => {
    it('Expects specified cohort to be deleted from the cohortManager', () => {
      const expected = { team1: [] }
      cd.createCohort('team1')
      expect(cd.removeCohort('team1')).toEqual(expected)
    })
    it('Expects error to be thrown if cohort not found', () => {
      const expected = 'Cohort Not Found!'
      expect(() => cd.removeCohort('team1')).toThrowError(expected)
    })
  })
})
