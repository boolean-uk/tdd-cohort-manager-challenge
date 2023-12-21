/* eslint-disable prettier/prettier */
import Cohortmanager from '../src/Cohortmanager.js'
describe('othello', () => {
    let cohortManager;

    beforeEach(() => {
        cohortManager = new Cohortmanager()
    })

   it('create a new cohort', () => {
        cohortManager.createCohort('class 1')
        expect(cohortManager.cohorts.length).toEqual(1);

   })

   it('search cohort by name!', () => {
        const expected = cohortManager.createCohort('class 20')
        cohortManager.createCohort('class 0')
        const expected2 =  cohortManager.createCohort('class 13')
        cohortManager.createCohort('class 8')
        const result = cohortManager.searchCohortByName('class 20')
        const result2 = cohortManager.searchCohortByName('class 13')
        expect(result).toEqual(expected)
        expect(result2).toEqual(expected2)
    })

})
