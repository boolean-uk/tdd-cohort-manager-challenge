const Manager = require('../src/manager.js')
const Student = require('../src/student.js')

fdescribe('Manager class', () => {
    beforeEach( () => {
        manager = new Manager()
    })

    it('creates a new cohort and adds it to the cohorts array', () => {
        expect(manager.createCohort('Cohort 5')).toEqual('Cohort 5 was created.')
        expect(manager.cohorts.length).toEqual(1)
        expect(manager.cohorts[0].name).toEqual('Cohort 5')
    })
})