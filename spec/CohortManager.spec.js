const CohortManager = require('../src/CohortManager.js')

describe('CohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('createCohort', () => {
    it('should create a new cohort with the given cohort name', () => {
      // set up
      const expected = {
        cohortName: 'cohort1',
        students: []
      }

      // execute
      const createdCohort = cohortManager.createCohort('cohort1')

      // verify
      expect(createdCohort).toEqual(expected)
    })

    // it('should return an existing cohort if the cohort with the same name already exists', () => {
    //   // set up
    //   const expected = {
    //     cohortName: 'cohort1',
    //     students: []
    //   }

    //   // execute
    //   const createdCohort1 = cohortManager.createCohort('cohort1')
    //   const createdCohort2 = cohortManager.createCohort('cohort2')

    //   //   verify
    //   expect(createdCohort1).toEqual(createdCohort2)
    // })
  })

  describe('findCohortByName', () => {
    beforeEach(() => {
      cohortManager.createCohort('cohort1')
      cohortManager.createCohort('cohort2')
      cohortManager.createCohort('cohort3')
    })

    it('should find a cohort by its given cohort name', () => {
      // set up
      const expected = {
        cohortName: 'cohort2'
      }

      // execute
      const foundCohort = cohortManager.findCohortByName('cohort2')

      //   verify
      expect(foundCohort.cohortName).toEqual('cohort2')
    })

    // it('should return null if the cohort with the given name does not exist', () => {
    //   // set up
    //   const expected = {
    //     cohortName: 'cohort2'
    //   }
    //   // execute
    //   const foundCohort = cohortManager.findCohortByName('cohort4')

    //   // verify
    //   expect(foundCohort).toBeNull()
    // })
  })
})