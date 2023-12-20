import {Cohort} from "../../src/cohort"
describe('Cohort', () => {
    let cohort 

    beforeEach(() => {
        cohort = new Cohort()
    })

    it('creates a cohort with a name', () => {
        const cohortName = 'Cohort 1'
        cohort.createCohort(cohortName)

        const result = cohort.cohortList
        expect(result[0].name).toEqual(cohortName)
    })
}) 