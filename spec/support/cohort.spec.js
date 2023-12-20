import Cohort from "../../src/cohort.js"
describe('Cohort', () => {
    let cohort 

    beforeEach(() => {
          cohort = new Cohort()
    })

    // Creating a cohort
    it('creates a cohort with a name', () => {
        const cohortName = 'Cohort 1'
        cohort.createCohort(cohortName)

        const result = cohort.cohortList
        expect(result[0].name).toEqual(cohortName)
    })

    // Searching a cohort
    it('searches cohort with its name', () => {
        cohort.createCohort('Cohort 1')
        cohort.createCohort('Cohort 2')
        
        const expected = {name: 'Cohort 1', students: [], capacity: 24}
        const result = cohort.searchCohort('Cohort 1')

        expect(result).toEqual(expected)
    })
}) 