const Manager = require('../src/manager.js')
const Student = require('../src/student.js')
const Cohort = require('../src/cohort.js')


describe('Cohort tests', () => {
    let manager



    beforeEach(() => {
        manager = new Manager()
    })

    // Q1
    it('create a cohort list', () => {
        // set up
        const expected = []
        // execute
        const result = manager.create()
        // verify
        expect(result).toEqual(expected)
    })

    it('add cohort to cohort list', () => {
        // setup
        const expected = [new Cohort('Cohort 4')]
        // execute
        const result = manager.addCohort('Cohort 4')
        // verfity
        expect(result).toEqual(expected)
    })

    // Q2
    it('Search for a cohort by cohort name', () => {
        // setup
        const expected = new Cohort('Cohort 3')
        // execute
        manager.addCohort('Cohort 1')
        manager.addCohort('Cohort 2')
        manager.addCohort('Cohort 3')
        manager.addCohort('Cohort 4')
        const result = manager.searchCohort('Cohort 3')
        // verfity
        expect(result).toEqual(expected)
    })

    // Q6
    it('Return errors if cohort not found', () => {
        // set up
        const expected = 'ERROR: Cohort not found'
        // execute
        manager.addCohort('Cohort 1')
        manager.addCohort('Cohort 2')
        manager.addCohort('Cohort 3')
        manager.addCohort('Cohort 4')
        const result = manager.searchCohort('Cohort 2019')
        // verify
        expect(result).toEqual(expected)
    })

    // Q4
    it('Remove a cohort by cohort name', () => {
        // set up
        const expected = [
            new Cohort('Cohort 1'),
            new Cohort('Cohort 3'),
            new Cohort('Cohort 4')
        ]
        // execute
        manager.addCohort('Cohort 1')
        manager.addCohort('Cohort 2')
        manager.addCohort('Cohort 3')
        manager.addCohort('Cohort 4')
        const result = manager.removeCohort('Cohort 2')
        // verify
        expect(result).toEqual(expected)
    })
    // Q9
    it('Cohorts cannot have the same name, and cannot exist without a name', () => {
        // set up
        const expected = 'Name already exists / Cannot exist without a name'
        // execute
        manager.addCohort('Cohort 1')
        manager.addCohort('Cohort 2')
        manager.addCohort('Cohort 3')
        manager.addCohort('Cohort 4')
        const result = manager.addCohort('Cohort 2' || '')
        // verify
        expect(result).toEqual(expected)
    })
})
