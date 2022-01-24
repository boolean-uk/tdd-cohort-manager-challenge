const CohortManager = require('../src/cohort-manager.js');
const Student = require('../src/student.js');
const Cohort = require('../src/cohort.js');

describe('CohortManager', () => {
    let cohortManager

    beforeEach(() => {
        cohortManager = new CohortManager()
    })

    it('CohortManager can create a cohort with a cohort name and add it to the cohort list', () => {
        const expected = new Cohort('Cohort #1')
        const result = cohortManager.createNewCohort('Cohort #1')
        expect(result).toEqual([expected])
    })

    it('CohortManager can search for a cohort by its name', () => {
        const expected = new Cohort('Cohort #1')
        cohortManager.createNewCohort('Cohort #1')
        const result = cohortManager.searchCohortByName('Cohort #1')
        expect(result).toEqual(expected)
    })

    it('CohortManager can remove a cohort by its name', () => {
        cohortManager.createNewCohort('Cohort #1')
        const expected = []
        cohortManager.removeCohortByName('Cohort #1')
        const result = cohortManager.getAllCohorts()
        expect(result).toEqual(expected)
    })

    it('CohortManager throw error if cohort searched is not found', () => {
        cohortManager.createNewCohort('Cohort #1')
        const expected = 'Cohort not found!'
        const result = cohortManager.searchCohortByName('Cohort #2')
        expect(result).toEqual(expected)
    })

    it('CohortManager throw error if cohort to remove is not found', () => {
        cohortManager.createNewCohort('Cohort #1')
        const expected = 'Cohort not found!'
        const result = cohortManager.removeCohortByName('Cohort #2')
        expect(result).toEqual(expected)
    })

    it('CohortManager can create a student', () => {
        cohortManager.createNewCohort('Cohort #1')
        const expected = new Student(1, 'Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        const result = cohortManager.createStudent('Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        expect(result).toEqual([expected])
    })

    it('CohortManager can add a student to a specific cohort', () => {
        cohortManager.createNewCohort('Cohort #1')
        cohortManager.createStudent('Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        const expected = [ new Student(1, 'Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com') ]
        const result = cohortManager.addStudentToCohort(1, 'Cohort #1')
        expect(result).toEqual(expected)
    })

    it('CohortManager throws an error when trying to add to a cohort a student that does not exist', () => {
        cohortManager.createNewCohort('Cohort #1')
        cohortManager.createStudent('Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        const expected = 'Student not found!'
        const result = cohortManager.addStudentToCohort(2, 'Cohort #1')
        expect(result).toEqual(expected)
    })

    it('CohortManager can remove a student from a specific cohort', () => {
        cohortManager.createNewCohort('Cohort #1')
        cohortManager.createStudent('Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        cohortManager.addStudentToCohort(1, 'Cohort #1')
        const expected = new Cohort('Cohort #1')
        const result = cohortManager.removeStudentFromCohort(1, 'Cohort #1')
        expect(result).toEqual(expected)
    })

    it('CohortManager throws an error when trying to remove from a cohort a student that does not exist', () => {
        cohortManager.createNewCohort('Cohort #1')
        cohortManager.createStudent('Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        cohortManager.addStudentToCohort(1, 'Cohort #1')
        const expected = 'Student not found!'
        const result = cohortManager.removeStudentFromCohort(2, 'Cohort #1')
        expect(result).toEqual(expected)
    })

    it('CohortManager can search a student by their ID', () => {
        cohortManager.createNewCohort('Cohort #1')
        cohortManager.createStudent(1, 'Nico', 'Picchio', 'nicopicchio', 'nicolapicchio@gmail.com')
        const expected = {
            studentID: 1,
            firstName: 'Nico',
            lastName: 'Picchio',
            githubAccount: 'nicopicchio',
            emailAddress: 'nicolapicchio@gmail.com'
        }
        const result = cohortManager.searchStudentbyID(1)
        expect(result).toEqual(expected)
    })

})