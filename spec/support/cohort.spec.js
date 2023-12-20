
describe('Cohort', () => {
    let cohort 

    beforeEach(() => {
        cohort = new Cohort()
    })

    it('creates a cohort with a name', () => {
        const cohortName = 'Cohort 1'

        const expected = {name: cohortName, students: []}
        const result = cohort.cohortList
        expect(result[0].name).toEqual(cohortName)
    })
}) 