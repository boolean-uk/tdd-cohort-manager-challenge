const Cohortmanager = require("../src/Cohortmanager.js");

describe("Cohortmanager", () => {
    let cohortmanager

    beforeEach(() => {
        cohortmanager = new Cohortmanager()
    })

    it("created and without any input", () => {
        // set up
        const expected = {
            studentList: [],
            cohortList: []
        }

        expect(cohortmanager.studentList).toEqual([])
        expect(cohortmanager.cohortList).toEqual([]);
    })

    it("create 2 valid cohorts", () => {
        // set up
        cohortmanager.createCohort('abc')
        cohortmanager.createCohort("0123")

        console.log('cohortList is ', cohortmanager.cohortList)
        expect(cohortmanager.cohortList[0].cohortName).toBe('abc')
        expect(cohortmanager.cohortList[1].cohortName).toBe('0123')
    })

    it("create 2 invalid cohorts name", () => {
        // set up

        expect(cohortmanager.createCohort(null)).toBe('A Cohort must have a name')
        expect(cohortmanager.createCohort(123)).toBe('A Cohort must be a sequence of characters')
    })

})