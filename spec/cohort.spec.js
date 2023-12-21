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

})
