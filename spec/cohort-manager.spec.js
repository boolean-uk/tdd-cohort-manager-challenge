import { CohortManager } from '../src/cohort-manager.js'

describe('Cohort Manger', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('/ createCohort', () => {
    it('/ creates a new cohort', () => {
      cohortManager.createCohort('Cohort 1')
      const result = cohortManager.cohortList[0].name
      expect(result).toEqual('Cohort 1')
    })

    it('/ no parameter inputed', () => {
      const expected = 'Cohort needs a name!'
      expect(() => cohortManager.createCohort('')).toThrowError(expected)
    })
  })

  describe('/ removeCohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('KeepMe')
      cohortManager.createCohort('RemoveMe')
    })

    it('/ removes a cohort', () => {
      const expectation = 1
      cohortManager.removeCohort('RemoveMe')
      expect(cohortManager.cohortList.length).toEqual(expectation)
    })

    it('/ no parameter inputed', () => {
      const expected = 'Please enter a cohort name'
      expect(() => cohortManager.removeCohort('').toThrowError(expected))
    })

    it('/ no cohort was found', () => {
      const expected = 'No cohort found with that name'
      expect(() => cohortManager.removeCohort('ImNotHere')).toThrowError(
        expected
      )
    })
  })

  describe('find cohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('findMe')
    })

    it('/ if found cohort', () => {
      const expected = cohortManager.cohortList[0]
      const result = cohortManager.findCohort('findMe')
      expect(result).toEqual(expected)
    })

    it('/ if no name was found', () => {
      const expected = 'No cohort found with that name'
      expect(() => cohortManager.findCohort('dontFindMe')).toThrowError(
        expected
      )
    })
  })

  describe('/ createStudent', () => {
    beforeEach(() => {
      cohortManager.allStudents = []
    })

    it('/ properly creates and adds a student to allStudent list', () => {
      const expectation = 'Steve'
      cohortManager.createStudent(
        'Steve',
        'Stevenson',
        '/Stevyboy',
        'steve@hotmail.com'
      )
      expect(cohortManager.allStudents[0].firstName).toEqual(expectation)
    })
    it('/ only a name was added', () => {
      const expectationOne = 'Steve'
      const expecationTwo = ''
      cohortManager.createStudent('Steve')
      console.log(cohortManager.allStudents)
      expect(cohortManager.allStudents[0].firstName).toEqual(expectationOne)
      expect(cohortManager.allStudents[0].lastName).toEqual(expecationTwo)
    })
  })
})
