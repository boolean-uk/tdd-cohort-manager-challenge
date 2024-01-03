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
    })


})