import Manager from "../src/manager.js"

describe('manager', () => {
    let manager

    beforeEach(() => {
        manager = new Manager
    })
    
    describe('creating a cohort', () => {
        it('by name', () => {
            const expected = [{ name: 'Cohort1', students: [] }]

            manager.createCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by invalid name', () => {
            const expected = []

            manager.createCohort(1337)

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by 2 of the same name', () => {
            const expected = [{ name: 'Cohort1', students: [] }]

            manager.createCohort('Cohort1')
            manager.createCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })
    })

    describe('removing a cohort', () => {
        it('by name', () => {
            const expected = []

            manager.createCohort('Cohort1')
            manager.removeCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by invalid name', () => {
            const expected = 'ERROR: cohortName is not a string'

            manager.createCohort('Cohort1')

            const result = manager.removeCohort(1337) 

            expect(result).toEqual(expected)
        })

        it('that does not exist', () => {
            const expected = "ERROR: cohort doesn't exist by that name"

            const result = manager.removeCohort('Cohort1')

            expect(result).toEqual(expected)
        })



    })


})