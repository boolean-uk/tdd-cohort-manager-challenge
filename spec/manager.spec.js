const Cohort = require('../src/cohort.js')
const Manager = require('../src/manager.js')
const Student = require('../src/student.js')

describe('Manager', () => {
    let manager

    beforeEach(() => {
        manager = new Manager()
    })

    it('creates cohort and adds to cohorts', () => {
        // set up
        const manager = new Manager()

        const expected = 2

        // execute
        manager.addCohort('AlphaXYZ')
        manager.addCohort('AlphaABC')

        const result = manager.cohorts.length

        expect(result).toEqual(expected)
    })

    it('removes cohort by name', () => {
        // set up
        const cohorts = new Manager()

        const expected = 4

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')
        cohorts.addCohort('AlphaDEF')
        cohorts.addCohort('AlphaQVW')
        cohorts.addCohort('AlphaQVW')

        cohorts.removeCohortByName('AlphaABC')

        const result = cohorts.cohorts.length

        expect(result).toEqual(expected)
    })

    it('throws error if cohort not there', () => {
        // set up
        const cohorts = new Manager()

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')
        cohorts.addCohort('AlphaDEF')
        cohorts.addCohort('AlphaQVW')
        cohorts.addCohort('AlphaQVW')

        expect(() =>
            cohorts
            .removeCohortByName('AlphaABC_no_such_cohort')
            .toThrowError('No such cohort')
        )
    })

    it('throws an error if cohort name not passed to function', () => {
        // set up
        const cohorts = new Manager()

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')
        cohorts.addCohort('AlphaDEF')
        cohorts.addCohort('AlphaQVW')
        cohorts.addCohort('AlphaQVW')

        expect(() =>
            cohorts
            .removeCohortByName()
            .toThrowError('Must pass a cohortName to function')
        )
    })

    it('adds student to specific cohort', () => {
        // set up
        const cohorts = new Manager()

        const expected = 'Joe Petri'

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaXYZ')

        // console.log(cohorts.cohorts[0].cohortName)
        // console.log(cohorts.cohorts[0].students[1].fullName)
        // console.log(cohorts.cohorts[0].students[1].uniqueId)

        const result = cohorts.cohorts[0].students[1].fullName

        expect(result).toEqual(expected)
    })

    it('adds student to specific cohort', () => {
        // set up
        const cohorts = new Manager()

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaXYZ')

        expect(() =>
            cohorts
            .addStudentCohortUniqueId(
                'Alice',
                'Bas',
                'YYY',
                'AlphaXYZ-NO_SUCH_COHORT'
            )
            .toThrowError('Not found')
        )
    })

    it('returns all students in all cohorts', () => {
        // set up
        const cohorts = new Manager()

        const expected = ['Alice Bas', 'Joe Petri', 'Joe Petri']

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaXYZ')

        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')

        const result = cohorts.allStudentsInAllCohorts()

        expect(result).toEqual(expected)
    })

    it('returns unique id for students in all cohorts', () => {
        // set up
        const cohorts = new Manager()

        const expected = ['YYY_haXYZ', 'LLB_haXYZ', 'LLX_haABC']

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joseph', 'Petri', 'LLX', 'AlphaABC')

        const result = cohorts.getUniqueIdsOfEveryStudentInAllCohorts()

        expect(result).toEqual(expected)
    })

    it('remove student with uniqueId and check with allStudentsInAllCohorts()', () => {
        // set up
        const cohorts = new Manager()

        const expected = ['Joe Petri', 'Joe Petri']

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')
        cohorts.removeStudentByUniqueId('YYY_haXYZ', 'AlphaXYZ')

        const result = cohorts.allStudentsInAllCohorts()

        expect(result).toEqual(expected)
    })

    it('throw newError() if invalid data passed to removeStudentByUniqueId()', () => {
        // set up
        const cohorts = new Manager()

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')

        expect(() =>
            cohorts
            .removeStudentByUniqueId('YYY_haXYZ____', 'AlphaXYZ')
            .toThrowError('Enter valid data')
        )
    })

    it('find student by ID', () => {
        // set up
        const cohorts = new Manager()

        const expected = 'Alice Bas'

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')

        const result = cohorts.findStudentById('YYY_haXYZ')

        expect(result).toEqual(expected)
    })

    it('student not found, throw new Error()', () => {
        // set up
        const cohorts = new Manager()

        // execute
        cohorts.addCohort('AlphaXYZ')
        cohorts.addCohort('AlphaABC')

        cohorts.addStudentCohortUniqueId('Alice', 'Bas', 'YYY', 'AlphaXYZ')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')
        cohorts.addStudentCohortUniqueId('Joe', 'Petri', 'LLB', 'AlphaABC')

        expect(() =>
            cohorts
            .findStudentById('YYY_haXYZ__')
            .toThrowError(`Enter valid cohort and student data`)
        )
    })
})

// thisCohorts = [{
//     cohortName: 'AlphaXYZ',
//     students: [
//         { fullName: 'Alice Bas', gitHub: 'YYY' },
//         { fullName: 'Alice Bas', gitHub: 'YYY' }
//     ]
// },
// {
//     cohortName: 'AlphaXYZ',
//     students: [{ fullName: 'Alice Bas', gitHub: 'YYY' }]
// }
// ]