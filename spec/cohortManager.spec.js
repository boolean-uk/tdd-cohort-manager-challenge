const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')
describe('CohortManager', () => {
    let cohortmanager
    beforeEach(() => {
        cohortmanager = new CohortManager()

    })

    it('add a cohort to the list', () => {
        const expected = 1

        cohortmanager.addCohort('Cohort 4')

        expect(cohortmanager.cohorts.length).toEqual(expected)

    })

    it('search for a cohort by cohort name', () => {
        const expected = { name: 'Cohort 4', students: [] }
        cohortmanager.addCohort('Cohort 4')
        const result = cohortmanager.searchCohort('Cohort 4')

        expect(result).toEqual(expected)

    })

    it('remove a cohort by cohort name', () => {
        //setup
        const expected = []
            //execute
        cohortmanager.addCohort('Cohort 4')
        const result = cohortmanager.removeCohort('Cohort 4')
            //verify
        expect(result).toEqual(expected)

    })


})